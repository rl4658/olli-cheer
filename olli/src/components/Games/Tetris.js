import React, { useState } from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";


import { createStage, checkCollision } from './helpers/gameHelpers';

import { usePlayer } from "./hooks/usePlayer";
import { useStage } from "./hooks/useStage";
import { useInterval } from './hooks/useInterval';
import { useGameStatus } from './hooks/useGameStatus';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(true);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);
  console.log('re-render');

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  }

  const startGame = () => {
    if (gameOver) {
      console.log("test")
      // Reset everything
      setStage(createStage());
      resetPlayer();
      setDropTime(800);
      setScore(0);
      setLevel(0);
      setRows(0);
      setGameOver(false);
    }
  }

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      // Also increase speed
      setDropTime(800 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      // Game Over
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  }

  const dropPlayer = () => {
    setDropTime(null)
    drop();
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(800 / (level + 1));
      } else if (keyCode === 32) {
        hardDrop();
        setDropTime(800 / (level + 1))
      }
    }
  };

  const hardDrop = () => {
    let pot = 0;
    while (!checkCollision(player, stage, { x: 0, y: pot })) {
      setDropTime(5);
      pot += 1;
    }

    updatePlayerPos({ x: 0, y: pot - 1, collided: true });
  }

  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      } else if (keyCode === 32) {
      }
    }
  }

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
          <img src={require('./image.png')} alt="Controls" />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;