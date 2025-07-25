# Math Game for Children

An interactive math game built with Angular that helps children practice basic arithmetic operations.

## Live Demo

You can play the game online at: [https://mathgame-1906.web.app](https://mathgame-1906.web.app)

## Features

- Presents basic arithmetic problems (addition or subtraction) with results between 0-100
- Column calculation style display for better visualization
- Provides immediate feedback on answers
- Displays "Darren, good job" with a star icon for correct answers
- Shows "Please try again" for incorrect answers
- "Check Answer" button is disabled after correct answer until next question
- Button color changes based on state (grey when disabled, blue when enabled)
- Rewards the child with a Thomas train picture after earning 5 stars

## Project Structure

- `math-game/`: Angular project directory
  - `src/app/math-game/`: Math game component
  - `src/app/services/`: Game logic service
  - `src/assets/images/`: Images used in the game

## How to Run

1. Navigate to the project directory:
   ```
   cd math-game
   ```

2. Install dependencies (if not already done):
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## How to Play

1. The game presents a simple arithmetic problem (addition or subtraction)
2. Enter your answer in the input field
3. Click "Check Answer" to submit your answer
4. For correct answers, you'll earn a star
5. After collecting 5 stars, you'll see a Thomas train reward
6. Click "Play Again" to restart the game

## Technologies Used

- Angular 20.1.0
- TypeScript
- RxJS for state management
- Firebase Hosting for deployment

## Deployment

1. Build the application for production:
   ```
   cd math-game
   ng build --configuration production
   ```

2. Deploy to Firebase Hosting:
   ```
   firebase deploy --only hosting
   ```

3. Your application will be available at:
   ```
   https://mathgame-1906.web.app
   ```
