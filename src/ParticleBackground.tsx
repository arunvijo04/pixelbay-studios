import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // We control with Tailwind
          background: { color: "#0e0e10" },
          particles: {
            number: {
              value: 100,
              density: { enable: true, area: 1000 },
            },
            color: { value: "#00ffe0" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: {
              value: { min: 1, max: 3 },
              random: true,
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              random: false,
              straight: false,
              outModes: "out",
            },
            links: {
              enable: true,
              distance: 120,
              color: "#00ffe0",
              opacity: 0.2,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
