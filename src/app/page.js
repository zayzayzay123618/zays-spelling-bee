export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
      <h1>🐝 Welcome to Zay&apos;s Spelling Bee! 🐝</h1>
      <p>Get ready to test your spelling skills.</p>
      <button 
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Start Game
      </button>
    </main>
  );
}
