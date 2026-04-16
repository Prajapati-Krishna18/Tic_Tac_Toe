# 🎮 Modern Tic Tac Toe - Premium React Project

A polished, responsive, and feature-rich Tic Tac Toe game built using **React.js** and **Vite**. This project features a modern dark theme, personalized player naming, a persistent scoreboard, and professional animations.

![Tic Tac Toe Preview](https://raw.githubusercontent.com/username/repo/main/public/preview.png) *(Placeholder for your preview image)*

## ✨ Features

- **Personalized Multiplayer**: Enter custom player names for X and O.
- **Dynamic Scoreboard**: Tracks wins for each player and total draws during the session.
- **Premium UI/UX**:
  - Deep **Glassmorphism** card effects.
  - Glowing symbols (Purple for **X**, Blue for **O**).
  - Smooth **animations** (Pulse on win, Fade-in on load).
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile.
- **Smart Controls**:
  - `New Game`: Reset the board for a rematch without losing scores.
  - `Reset Scores`: Start fresh with zero scores.
  - `Change Players`: Go back to the setup screen to enter new names.

## 🛠️ Technology Stack

- **Framework**: [React.js](https://react.dev/) (Functional Components & Hooks)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Modular & Clean)
- **Icons**: Custom SVGs

## 📂 Project Structure

```text
src/
├── components/
│   ├── TicTacToe.jsx    # Main game logic & layout
│   ├── Square.jsx       # Individual grid cell
│   ├── PlayerSetup.jsx  # Name entry form
│   └── ScoreBoard.jsx   # Win/Loss tracking UI
├── styles/
│   └── TicTacToe.css    # Premium styling & glassmorphism
├── utils/
│   └── calculateWinner.js # Win/Draw algorithm
├── App.jsx              # Main entry point
└── index.css            # Global resets & layout
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (installed automatically with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd tic-tac-toe
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Visit `http://localhost:5173` to play!

## 📜 License

This project is open-source and available under the **MIT License**.

---

Developed with ❤️ as a professional portfolio project.
