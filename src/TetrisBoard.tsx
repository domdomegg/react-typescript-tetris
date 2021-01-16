import React, { useState } from 'react';
import { GameState } from './types';

function TetrisBoard({ gameState }: { gameState: GameState }) {
    const [, setFrameNumber] = useState(gameState.frameNumber);
    gameState.onFrame = setFrameNumber;

    if (gameState.ended) {
        return <p>Game over! (hit enter to restart)</p>
    }

    return <div className="board">
        {gameState.board.slice(3).map((row, i) => <div key={i} className="row">{row.map((square, j) => <div key={j} className="square" style={{ backgroundColor: square }}></div>)}</div>)}
    </div>;
}

export default TetrisBoard;