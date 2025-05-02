// Loader.jsx
import React from "react";
import "./Loader.css"; // Optional for additional styling

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="loader-video"
        >
          <source src="/loader.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Loader;
