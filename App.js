import React from 'react';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="app-container" style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 style={{
        color: "#00ffe7",
        fontFamily: "Orbitron, 'Segoe UI', Arial, sans-serif",
        letterSpacing: "2px",
        textShadow: "0 2px 8px #00ffe7"
      }}>
        Digital Calculator
      </h1>
      <Calculator />
    </div>
  );
}

export default App;