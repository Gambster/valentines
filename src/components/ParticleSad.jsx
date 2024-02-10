// Particle.js
import React, { useState, useEffect } from "react";
import "./Particle.css";

const ParticleSad = () => {
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
          😭
        </div>
      ))}
    </div>
  );
};

export default ParticleSad;
