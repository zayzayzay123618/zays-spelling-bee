"use client"; // Required for using state in Next.js App Router

import { useState } from "react";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
      {!gameStarted ? (
        <>
          <h1>🐝 Welcome to Zay&apos;s Spelling Bee! 🐝</h1>
          <p>Get ready to test your spelling skills.</p>
          <button
            onClick={startGame}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              cursor: "pointer",
              marginTop: "20px",
              backgroundColor: "#FFD700",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Start Game
          </button>
        </>
      ) : (
        <GameScreen />
      )}
    </main>
  );
}

// Game Screen Component
function GameScreen() {
  return (
    <div>
      <h2>Spell the Word:</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>____</p>
      <input
        type="text"
        placeholder="Type your spelling here..."
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginTop: "10px",
        }}
      />
      <br />
      <button
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Submit
      </button>
    </div>
  );
}
