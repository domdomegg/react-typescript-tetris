import React from 'react';
import { Coordinate, GameState, Shape, Square } from './types';
import './App.css';
import TetrisBoard from './TetrisBoard';
import shapeFunctions from './shapeFunctions';

const BOARD_HEIGHT = 23;
const BOARD_WIDTH = 10;

const randomColor = () => "hsl(" + 360 * Math.random() + ',' + (80 + 20 * Math.random()) + '%,' + (65 + 10 * Math.random()) + '%)';
const newShape = () => {
  const { getCoordinates, rotate } = shapeFunctions[Math.floor(Math.random() * shapeFunctions.length)];

  return {
    bottomLeft: { x: 4, y: 3 },
    color: randomColor(),
    getCoordinates,
    rotate,
  }
}

const mod = (x: number, board: Square[][] = gameState.board) => ((x % board[0].length) + board[0].length) % board[0].length;

const draw = (board: Square[][], coordinates: Coordinate[], color: Square) => {
  for (const coordinate of coordinates) {
    if (color && board[coordinate.y][mod(coordinate.x)]) {
      // throw new Error('Tried to draw shape where already present!')
    }
    board[coordinate.y][mod(coordinate.x)] = color;
  }
}

const drawShape = (board: Square[][], shape: Shape, color: Square) => draw(board, shape.getCoordinates(shape), color);

const collides = (board: Square[][], shape: Shape) => {
  if (shape.bottomLeft.y >= board.length) {
    return true;
  }

  const coords = shape.getCoordinates(shape);
  if (coords.some(({ x, y }) => board[y][mod(x)])) {
    return true;
  }

  return false;
}

var gameState: GameState = {
  board: new Array(BOARD_HEIGHT).fill(new Array(BOARD_WIDTH).fill(undefined)).map(row => row.slice()),
  current: newShape(),
  frameNumber: 0,
  ended: false
}
const gameLoop = () => {
  if (gameState.ended) return;

  // Erase shape from last frame
  drawShape(gameState.board, gameState.current, undefined);

  // If we moved down a square, would we collide?
  gameState.current.bottomLeft.y++;
  if (collides(gameState.board, gameState.current)) {
    gameState.current.bottomLeft.y--;
    drawShape(gameState.board, gameState.current, gameState.current.color);
    gameState.current = newShape();
    
    // We have any complete rows
    if (gameState.board.filter(row => row.every(sq => sq !== undefined)).length > 0) {
      // Remove any complete rows
      gameState.board = gameState.board.filter(row => row.some(sq => sq === undefined))
      // Insert new rows as necessary
      gameState.board =  new Array(BOARD_HEIGHT - gameState.board.length).fill(new Array(BOARD_WIDTH).fill(undefined)).map(row => row.slice()).concat(gameState.board);
    }

    if (collides(gameState.board, gameState.current)) {
      gameState.ended = true;
      gameState.frameNumber++;
      if (gameState.onFrame) gameState.onFrame(gameState.frameNumber)
      return;
    }
  }

  // Draw shape
  drawShape(gameState.board, gameState.current, gameState.current.color);

  gameState.frameNumber++;
  if (gameState.onFrame) gameState.onFrame(gameState.frameNumber)
}

gameLoop();
setInterval(gameLoop, 500);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    gameState.board = new Array(BOARD_HEIGHT).fill(new Array(BOARD_WIDTH).fill(undefined)).map(row => row.slice());
    gameState.current = newShape();
    gameState.ended = false;
    gameState.frameNumber++;
    if (gameState.onFrame) gameState.onFrame(gameState.frameNumber)
  }
  if (gameState.ended) return;

  if (event.key === 'ArrowRight') {
    event.preventDefault();
    drawShape(gameState.board, gameState.current, undefined);
    gameState.current.bottomLeft.x++;
    if (collides(gameState.board, gameState.current)) {
      gameState.current.bottomLeft.x--;
    }
    drawShape(gameState.board, gameState.current, gameState.current.color);
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    drawShape(gameState.board, gameState.current, undefined);
    gameState.current.bottomLeft.x--;
    if (collides(gameState.board, gameState.current)) {
      gameState.current.bottomLeft.x++;
    }
    drawShape(gameState.board, gameState.current, gameState.current.color);
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    drawShape(gameState.board, gameState.current, undefined);
    gameState.current.rotate(gameState.current);
    if (collides(gameState.board, gameState.current)) {
      gameState.current.rotate(gameState.current);
      gameState.current.rotate(gameState.current);
      gameState.current.rotate(gameState.current);
    }
    drawShape(gameState.board, gameState.current, gameState.current.color);
  }
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    gameLoop();
  }
  gameState.frameNumber++;
  if (gameState.onFrame) gameState.onFrame(gameState.frameNumber)
})

function App() {
  return (
    <div className="App">
      <h1>Tetris!</h1>
      <TetrisBoard gameState={gameState} />
    </div>
  );
}

export default App;
