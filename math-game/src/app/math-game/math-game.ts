import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MathGameService, MathProblem } from '../services/math-game';

@Component({
  selector: 'app-math-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './math-game.html',
  styleUrl: './math-game.scss'
})
export class MathGameComponent implements OnInit {
  currentProblem: MathProblem | null = null;
  userAnswer: number | null = null;
  feedback: string = '';
  isCorrect: boolean | null = null;
  starCount: number = 0;
  showReward: boolean = false;

  constructor(private mathGameService: MathGameService) {}

  ngOnInit(): void {
    this.mathGameService.currentProblem$.subscribe(problem => {
      this.currentProblem = problem;
      this.userAnswer = null;
      this.feedback = '';
      this.isCorrect = null;
    });

    this.mathGameService.starCount$.subscribe(count => {
      this.starCount = count;
    });

    this.mathGameService.showReward$.subscribe(show => {
      this.showReward = show;
    });
  }

  checkAnswer(): void {
    if (this.userAnswer === null) return;
    
    this.isCorrect = this.mathGameService.checkAnswer(this.userAnswer);
    
    if (this.isCorrect) {
      this.feedback = 'Darren, good job';
      // We no longer automatically generate a new problem
      // The user will click the Next Question button instead
    } else {
      this.feedback = 'Please try again.';
    }
  }
  
  nextQuestion(): void {
    this.mathGameService.generateNewProblem();
  }

  resetGame(): void {
    this.mathGameService.resetGame();
  }
}
