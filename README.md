# 🎲 Advanced Dice Game

A modern, feature-rich dice game built with React and styled-components featuring beautiful animations and an engaging user interface.

## ✨ Features

### 🎮 Game Features
- **Score Tracking**: Real-time score updates with visual feedback
- **High Score System**: Persistent high score tracking using localStorage
- **Streak Counter**: Track consecutive wins and maintain your best streak
- **Game History**: View your last 5 rolls with results
- **Animated Dice Roll**: Smooth rolling animation for realistic feel
- **Smart Reset**: Reset game while keeping high scores intact

### 🎨 UI/UX Features
- **Modern Gradient Design**: Beautiful purple gradient background
- **Glassmorphism Effects**: Frosted glass style cards and components
- **Smooth Animations**: Enter animations, hover effects, and transitions
- **Responsive Design**: Works perfectly on all screen sizes
- **Celebration Effects**: Visual feedback for new high scores
- **Interactive Elements**: Satisfying hover and click animations
- **Particle Background**: Floating animated circles for depth

### 🎯 Gameplay
1. Select a number between 1-6
2. Click the dice to roll
3. Match your selection with the dice result to earn points
4. Wrong guesses deduct 2 points
5. Build streaks by winning consecutively!

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Technologies Used

- **React** + **Vite** - Modern React setup with HMR
- **styled-components** - CSS-in-JS styling with animations
- **localStorage** - Persistent data storage for scores

## 📱 Responsive Design

The game is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones

## 🎨 Color Scheme

- Primary Gradient: Purple (#667eea, #764ba2)
- Background: Dynamic gradient background
- Cards: White glassmorphism with backdrop blur
- Accents: Vibrant gradients for interactive elements

## 🎯 Game Rules

- **Win**: Selected number matches dice → Earn points equal to dice number
- **Lose**: Numbers don't match → Lose 2 points  
- **Streak**: Win consecutively to build your streak
- **High Score**: Your best score is saved automatically

## 🔮 Future Enhancements

- Sound effects toggle
- Multiple difficulty levels
- Multiplayer mode
- Leaderboards
- Custom themes
- Achievement system

---

Made with ❤️ and React

## React + Vite Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
