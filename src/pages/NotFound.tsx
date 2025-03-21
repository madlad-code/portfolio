import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const gameStateRef = useRef({
    isJumping: false,
    jumpHeight: 0,
    obstacles: [] as { x: number; width: number; height: number }[],
    gameSpeed: 5,
    llamaY: 0,
    animationFrame: 0
  });

  // Sound effects
  const jumpSound = new Audio("/sounds/jump.mp3");
  const milestoneSound = new Audio("/sounds/milestone.mp3");
  const gameOverSound = new Audio("/sounds/gameover.mp3");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gameState = gameStateRef.current;

    // Constants
    const GROUND_Y = canvas.height - 60;
    const LLAMA_WIDTH = 50;
    const LLAMA_HEIGHT = 50;
    const JUMP_FORCE = 15;
    const GRAVITY = 0.8;

    // Initialize llama position
    gameState.llamaY = GROUND_Y - LLAMA_HEIGHT;

    const handleJump = (e: KeyboardEvent) => {
      if ((e.code === "Space" || e.code === "ArrowUp") && !gameState.isJumping) {
        gameState.isJumping = true;
        gameState.jumpHeight = JUMP_FORCE;
        jumpSound.currentTime = 0;
        jumpSound.play().catch(() => {});
      }
    };

    const spawnObstacle = () => {
      gameState.obstacles.push({
        x: canvas.width,
        width: 30,
        height: 50
      });
    };

    const checkCollision = (llamaX: number, llamaY: number) => {
      return gameState.obstacles.some(obstacle => {
        return (
          llamaX < obstacle.x + obstacle.width &&
          llamaX + LLAMA_WIDTH > obstacle.x &&
          llamaY < GROUND_Y &&
          llamaY + LLAMA_HEIGHT > GROUND_Y - obstacle.height
        );
      });
    };

    const gameLoop = () => {
      if (gameOver) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = "#c2b280";
      ctx.fillRect(0, GROUND_Y, canvas.width, 2);

      // Update and draw llama
      if (gameState.isJumping) {
        gameState.llamaY -= gameState.jumpHeight;
        gameState.jumpHeight -= GRAVITY;

        if (gameState.llamaY >= GROUND_Y - LLAMA_HEIGHT) {
          gameState.llamaY = GROUND_Y - LLAMA_HEIGHT;
          gameState.isJumping = false;
        }
      }

      // Draw llama (simple rectangle for now)
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(50, gameState.llamaY, LLAMA_WIDTH, LLAMA_HEIGHT);

      // Update and draw obstacles
      gameState.obstacles = gameState.obstacles.filter(obstacle => {
        obstacle.x -= gameState.gameSpeed;
        // Draw obstacle (simple rectangle)
        ctx.fillStyle = "#2d5a27";
        ctx.fillRect(obstacle.x, GROUND_Y - obstacle.height, obstacle.width, obstacle.height);
        return obstacle.x + obstacle.width > 0;
      });

      // Spawn new obstacles
      if (gameState.animationFrame % 100 === 0) {
        spawnObstacle();
      }

      // Check collision
      if (checkCollision(50, gameState.llamaY)) {
        gameOverSound.play().catch(() => {});
        setGameOver(true);
        setHighScore(prev => Math.max(prev, score));
        return;
      }

      // Update score
      setScore(prev => {
        const newScore = prev + 1;
        if (newScore % 100 === 0) {
          milestoneSound.play().catch(() => {});
          gameState.gameSpeed += 0.5;
        }
        return newScore;
      });

      gameState.animationFrame++;
      requestAnimationFrame(gameLoop);
    };

    document.addEventListener("keydown", handleJump);
    requestAnimationFrame(gameLoop);

    return () => {
      document.removeEventListener("keydown", handleJump);
    };
  }, [gameOver]);

  const restartGame = () => {
    gameStateRef.current = {
      ...gameStateRef.current,
      isJumping: false,
      jumpHeight: 0,
      obstacles: [],
      gameSpeed: 5,
      llamaY: 0,
      animationFrame: 0
    };
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 absolute inset-0 z-50">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-white mb-2">404 Llama Runner</h1>
        <p className="text-xl text-gray-300">Score: {score} | High Score: {highScore}</p>
      </div>
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="border-2 border-gray-700 bg-gray-800"
        style={{ imageRendering: 'pixelated' }}
      />
      {gameOver && (
        <div className="mt-4">
          <button
            onClick={restartGame}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Play Again
          </button>
        </div>
      )}
      <p className="text-gray-400 mt-4">Press Space or Up Arrow to jump!</p>
    </div>
  );
};

export default NotFound;