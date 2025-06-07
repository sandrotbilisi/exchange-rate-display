"use client";

import React from "react";

export default function FullscreenButton() {
  const enterFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((elem as any).webkitRequestFullscreen) {
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) {
      (elem as any).msRequestFullscreen();
    }
  };

  return (
    <button
      onClick={enterFullscreen}
      style={{
        padding: "12px 24px",
        fontSize: "1rem",
        background: "#222",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      Enter Fullscreen
    </button>
  );
}
