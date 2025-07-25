import { Component } from '@angular/core';
import { MathGameComponent } from './math-game/math-game';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MathGameComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Math Game';
}
