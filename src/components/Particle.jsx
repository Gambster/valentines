// Particle.js
import React, { useState, useEffect } from "react";
import "./Particle.css";

const Particle = () => {
  const [particles, setParticles] = useState([]);

  const getRandomOffset = () => Math.random() * 40 - 10; // Adjust the range as needed

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const newParticle = {
      id: Date.now(),
      x: clientX + getRandomOffset(),
      y: clientY + getRandomOffset(),
      timestamp: Date.now(),
    };

    setParticles((prevParticles) => [...prevParticles, newParticle]);

    setTimeout(() => {
      removeParticle(newParticle.timestamp);
    }, 250);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [particles]);

  const removeParticle = (timestamp) => {
    setParticles((prevParticles) =>
      prevParticles.map((particle) =>
        particle.timestamp === timestamp
          ? { ...particle, fading: true }
          : particle
      )
    );

    // After a delay, remove the particle from the state
    setTimeout(() => {
      setParticles((prevParticles) =>
        prevParticles.filter((particle) => particle.timestamp !== timestamp)
      );
    }, 500); // Adjust the duration for the fade-out effect
  };

  return (
    <div className="particle-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.fading ? "fade-out" : ""}`}
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.fading ? 0 : 1,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="#FF69B4" // Set the fill color to pink
              d="M12 21.35l-1.45-1.32C6.05 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-4.05 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Particle;
