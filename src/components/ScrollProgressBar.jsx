import React, { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      // Calculate how far the user has scrolled
      const scrollPx = document.documentElement.scrollTop;
      // Calculate the total scrollable height (total height - viewport height)
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      // Convert to percentage
      const scrollPercent = (scrollPx / scrollHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    // Add scroll event listener
    window.addEventListener("scroll", updateScrollProgress);

    // Clean up
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 flex justify-center items-center">
      <div
        className="h-full bg-[var(--clr-teal)] origin-center transition-all duration-200 rounded-full"
        style={{
          width: `${scrollProgress}%`,
          transform: `translateX(-50%)`,
          left: "50%",
          position: "absolute",
          boxShadow: "0 2px 4px rgba(13, 148, 136, 0.3)",
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
