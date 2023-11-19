// CustomCursor.js
'use client'

// CustomCursor.js

import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = cursorRef.current;
      const logo = logoRef.current;

      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;

      // Adjust the opacity or visibility of the logo as needed
      logo.style.opacity = '0.5'; // Change the opacity to make it slightly visible behind the cursor
    };

    const resetLogo = () => {
      const logo = logoRef.current;
      logo.style.opacity = '1'; // Reset the logo opacity when cursor movement stops
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', resetLogo);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', resetLogo);
    };
  }, []);

  return (
    <div>
      <div
        ref={cursorRef}
        className="w-10 h-10 pointer-events-none z-50 fixed"
        style={{
          backgroundImage: `url('logo.png')`, // Replace with your image path
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transform: 'translate(-50%, -50%)', // Center the cursor on the pointer
          pointerEvents: 'none',
          zIndex: 9999, // Ensure a high z-index for the cursor
        }}
      ></div>
      <div
        ref={logoRef}
        className="logo-class" // Add your logo class or styling here
        style={{
          /* Apply styles for your logo, adjust positioning, and z-index */
          position: 'fixed',
          top: 'calc(5% + 20px)', // Adjust as needed to position slightly behind the cursor
          left: 'calc(5% + 20px)', // Adjust as needed to position slightly behind the cursor
          transform: 'translate(-50%, -50%)',
          zIndex: 1, // Set a lower z-index to make it appear behind the cursor
        }}
      >
      </div>
    </div>
  );
}
