import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const updatePosition = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", updatePosition);
    return () => window.removeEventListener("pointermove", updatePosition);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[5] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl md:block"
      style={{ left: position.x, top: position.y }}
    />
  );
}
