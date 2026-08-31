import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  const mouse = useRef({ x: -100, y: -100 });
  const ringPosition = useRef({ x: -100, y: -100 });
  const animationFrame = useRef(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    const updateDevice = () => setIsDesktop(media.matches);

    updateDevice();
    media.addEventListener("change", updateDevice);

    return () => {
      media.removeEventListener("change", updateDevice);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const ring = ringRef.current;
    const dot = dotRef.current;

    if (!ring || !dot) return;

    const handleMouseMove = (e) => {
      mouse.current = {
        x: e.clientX,
        y: e.clientY,
      };

      // Center dot follows immediately
      dot.style.transform = `
        translate3d(${e.clientX}px, ${e.clientY}px, 0)
        translate(-50%, -50%)
      `;

      setVisible(true);

      const interactive = e.target.closest(
        "a, button, input, textarea, select, [role='button'], .cursor-hover"
      );

      document.body.classList.toggle(
        "ks-cursor-hover",
        Boolean(interactive)
      );
    };

    const handleMouseDown = () => {
      document.body.classList.add("ks-cursor-click");
    };

    const handleMouseUp = () => {
      document.body.classList.remove("ks-cursor-click");
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const animate = () => {
      ringPosition.current.x +=
        (mouse.current.x - ringPosition.current.x) * 0.14;

      ringPosition.current.y +=
        (mouse.current.y - ringPosition.current.y) * 0.14;

      ring.style.transform = `
        translate3d(
          ${ringPosition.current.x}px,
          ${ringPosition.current.y}px,
          0
        )
        translate(-50%, -50%)
      `;

      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    document.addEventListener("mouseleave", handleMouseLeave);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      document.removeEventListener("mouseleave", handleMouseLeave);

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      document.body.classList.remove("ks-cursor-hover");
      document.body.classList.remove("ks-cursor-click");
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Smooth outer ring */}
      <div
        ref={ringRef}
        className={`ks-cursor-ring ${
          visible ? "ks-cursor-visible" : ""
        }`}
      >
        <span className="ks-cursor-inner" />
      </div>

      {/* Center dot */}
      <div
        ref={dotRef}
        className={`ks-cursor-dot ${
          visible ? "ks-cursor-visible" : ""
        }`}
      />
    </>
  );
};

export default CustomCursor;