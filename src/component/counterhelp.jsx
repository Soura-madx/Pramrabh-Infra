import React, { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({
  from = 0,
  to = 500,
  duration = 2000,
  suffix = "+",
  label = "",
  subLabel = "",
}) => {
  const [value, setValue] = useState(from);
  const [hasStarted, setHasStarted] = useState(false); // New state to trigger animation
  const containerRef = useRef(null); // Ref to watch the element

  // 1. Observer to detect when the element is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 } // Start when 10% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Your existing logic, but wrapped in an "if (hasStarted)" check
  useEffect(() => {
    if (!hasStarted) return; // Wait until it's on screen!

    const diff = to - from;
    if (diff === 0) return;

    const fps = 60;
    const totalSteps = Math.round((duration / 1000) * fps);
    const increment = diff / totalSteps;
    let current = from;
    let step = 0;

    const timer = setInterval(() => {
      step += 1;
      current += increment;
      if (step >= totalSteps) {
        setValue(to);
        clearInterval(timer);
      } else {
        setValue(Math.round(current));
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [from, to, duration, hasStarted]);

  return (
    <div ref={containerRef} className="flex-1 min-w-[180px]">
      <div className="text-3xl md:text-4xl font-semibold text-slate-900">
        {value}
        {suffix}
      </div>
      <div className="mt-1 text-sm md:text-base font-medium text-slate-800">
        {label}
      </div>
      {subLabel && (
        <div className="text-xs md:text-sm text-slate-500 mt-0.5">
          {subLabel}
        </div>
      )}
    </div>
  );
};

export default AnimatedCounter;