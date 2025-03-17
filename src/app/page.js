"use client"; // Required for Next.js App Router

import { useState } from "react";

export default function Home() {
  const [gameMode, setGameMode] = useState(null);

  const startGame = (mode) => {
    setGameMode(mode);
  };

  return (
    <main style={{ textAlign: "center", padding: "50px", color: "#fff" }}>
      {!gameMode ? (
        <>
          <h1>🐝 Welcome to Zay&apos;s Spelling Bee! 🐝</h1>
          <p>Choose your game mode:</p>

          <button
            onClick={() => startGame("single")}
            style={buttonStyle}
          >
            🎯 Single Player
          </button>

          <button
            onClick={() => startGame("teams")}
            style={buttonStyle}
          >
            🤝 Teams Mode
          </button>

          {/* Hidden Drunk Mode */}
          <button
            onClick={() => startGame("drunk")}
            style={{ ...buttonStyle, visibility: "hidden" }}
          >
            🍻 Drunk Mode
          </button>
        </>
      ) : (
        <GameScreen mode={gameMode} />
      )}
    </main>
  );
}

// Game Screen Component
function GameScreen({ mode }) {
  return (
    <div>
      <h2>Mode: {mode === "single" ? "Single Player" : mode === "teams" ? "Teams Mode" : "Drunk Mode (Shhh 🤫)"}</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold", color: "#FFD700" }}>Get ready to spell!</p>
      <input
        type="text"
        placeholder="Type your spelling here..."
        style={inputStyle}
      />
      <br />
      <button style={submitButtonStyle}>Submit</button>
    </div>
  );
}

// Button Styling
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "18px",
  cursor: "pointer",
  margin: "10px",
  backgroundColor: "#FFD700",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  color: "#000",
};

// Input Box Styling
const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  marginTop: "10px",
};

// Submit Button Styling
const submitButtonStyle = {
  marginTop: "10px",
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

