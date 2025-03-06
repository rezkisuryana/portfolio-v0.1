"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const root = document.documentElement;
    root.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    root.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    root.style.setProperty("--first-color", firstColor);
    root.style.setProperty("--second-color", secondColor);
    root.style.setProperty("--third-color", thirdColor);
    root.style.setProperty("--fourth-color", fourthColor);
    root.style.setProperty("--fifth-color", fifthColor);
    root.style.setProperty("--pointer-color", pointerColor);
    root.style.setProperty("--size", size);
    root.style.setProperty("--blending-value", blendingValue);
  }, [isClient]);

  useEffect(() => {
    if (!interactiveRef.current) return;

    let animationFrameId: number;
    const move = () => {
      setCurX((prev) => prev + (tgX - prev) / 20);
      setCurY((prev) => prev + (tgY - prev) / 20);
      interactiveRef.current!.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      animationFrameId = requestAnimationFrame(move);
    };
    
    move();
    return () => cancelAnimationFrame(animationFrameId);
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  return (
    <div
      className={cn(
        "w-full h-full absolute overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <div className={cn("", className)}>{children}</div>
      {interactive && (
        <div
          ref={interactiveRef}
          onMouseMove={handleMouseMove}
          className="absolute w-full h-full"
        ></div>
      )}
    </div>
  );
};
