import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MathProblem {
  firstNumber: number;
  secondNumber: number;
  operation: '+' | '-';
  correctAnswer: number;
}

@Injectable({
  providedIn: 'root'
})
export class MathGameService {
  private currentProblem = new BehaviorSubject<MathProblem | null>(null);
  private starCount = new BehaviorSubject<number>(0);
  private showReward = new BehaviorSubject<boolean>(false);

  currentProblem$ = this.currentProblem.asObservable();
  starCount$ = this.starCount.asObservable();
  showReward$ = this.showReward.asObservable();

  constructor() {
    this.generateNewProblem();
  }

  generateNewProblem(): void {
    // Decide randomly whether to do addition or subtraction
    const operation = Math.random() > 0.5 ? '+' : '-';
    
    let firstNumber: number;
    let secondNumber: number;
    let correctAnswer: number;

    if (operation === '+') {
      // For addition, ensure the sum is between 0 and 100
      firstNumber = Math.floor(Math.random() * 50); // First number up to 50
      secondNumber = Math.floor(Math.random() * (100 - firstNumber)); // Second number ensures sum <= 100
      correctAnswer = firstNumber + secondNumber;
    } else {
      // For subtraction, ensure the result is non-negative
      firstNumber = Math.floor(Math.random() * 100); // First number up to 100
      secondNumber = Math.floor(Math.random() * (firstNumber + 1)); // Second number ensures result >= 0
      correctAnswer = firstNumber - secondNumber;
    }

    this.currentProblem.next({
      firstNumber,
      secondNumber,
      operation,
      correctAnswer
    });
  }

  checkAnswer(userAnswer: number): boolean {
    const problem = this.currentProblem.value;
    if (!problem) return false;

    const isCorrect = userAnswer === problem.correctAnswer;
    
    if (isCorrect) {
      const newStarCount = this.starCount.value + 1;
      this.starCount.next(newStarCount);
      
      // Check if the user has earned 5 stars
      if (newStarCount >= 5) {
        this.showReward.next(true);
      }
    }
    
    return isCorrect;
  }

  resetGame(): void {
    this.starCount.next(0);
    this.showReward.next(false);
    this.generateNewProblem();
  }
}
