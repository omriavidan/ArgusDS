"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface HoldButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Callback fired when the button is successfully held for the required duration.
   */
  onComplete: () => void;
  /**
   * The amount of time in milliseconds the button must be held.
   * @default 1500
   */
  holdDuration?: number;
}

const HoldButton = React.forwardRef<HTMLButtonElement, HoldButtonProps>(
  (
    { className, onComplete, holdDuration = 1500, children, ...props },
    ref
  ) => {
    const [holdProgress, setHoldProgress] = useState(0);
    const [isRippling, setIsRippling] = useState(false);
    
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const isCompleteRef = useRef(false);

    const handlePressStart = (e: React.MouseEvent | React.TouchEvent) => {
      // Don't start if already completed
      if (isCompleteRef.current) return;
      
      const intervalMs = 20;
      const step = (intervalMs / holdDuration) * 100;

      intervalRef.current = setInterval(() => {
        setHoldProgress((prev) => {
          if (prev + step >= 100) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            isCompleteRef.current = true;
            setIsRippling(true);
            
            // Wait for ripple animation to visually finish before firing onComplete
            setTimeout(() => {
               onComplete();
            }, 400);
            
            return 100;
          }
          return prev + step;
        });
      }, intervalMs);
    };

    const handlePressEnd = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (!isCompleteRef.current) {
        // Reset if let go early
        setHoldProgress(0);
      }
    };

    // Clean up interval on unmount
    useEffect(() => {
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, []);

    // Also call user-provided event handlers if they exist
    const onMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      handlePressStart(e);
      props.onMouseDown?.(e);
    };
    const onMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
      handlePressEnd();
      props.onMouseUp?.(e);
    };
    const onMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      handlePressEnd();
      props.onMouseLeave?.(e);
    };
    const onTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
      handlePressStart(e);
      props.onTouchStart?.(e);
    };
    const onTouchEnd = (e: React.TouchEvent<HTMLButtonElement>) => {
      handlePressEnd();
      props.onTouchEnd?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className={cn(
          "relative px-8 py-2.5 rounded-md text-sm font-medium overflow-hidden select-none",
          className
        )}
        style={{
          background: "transparent",
          border:
            holdProgress > 0
              ? "1.5px solid rgba(96,165,250,0.15)"
              : "1.5px solid rgba(96,165,250,0.5)",
          color: holdProgress > 0 ? "#fff" : "#60a5fa",
          animation:
            holdProgress > 0 ? "neonFlicker 2s ease-in-out infinite" : "none",
          transition: "color 0.1s ease, border-color 0.15s ease",
          ...props.style,
        }}
        {...props}
      >
        {/* Two chasing neon snakes on the border edge */}
        {holdProgress > 0 && !isRippling && (
          <>
            <span
              aria-hidden
              style={{
                position: "absolute",
                width: 52,
                height: 4,
                borderRadius: "2px",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.35) 22%, rgba(186,230,253,0.95) 50%, rgba(147,197,253,0.35) 78%, transparent 100%)",
                offsetPath: "inset(0 round 0.375rem)",
                offsetRotate: "auto",
                animation: "chaseLight 2.8s linear infinite",
                pointerEvents: "none",
                zIndex: 3,
              }}
            />
            <span
              aria-hidden
              style={{
                position: "absolute",
                width: 42,
                height: 4,
                borderRadius: "2px",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.3) 22%, rgba(147,197,253,0.9) 50%, rgba(96,165,250,0.3) 78%, transparent 100%)",
                offsetPath: "inset(0 round 0.375rem)",
                offsetRotate: "auto",
                animation: "chaseLight 2.8s linear infinite",
                animationDelay: "-1.4s",
                pointerEvents: "none",
                zIndex: 3,
              }}
            />
          </>
        )}

        {/* Neon charge fill — clipped to rounded corners with its own wrapper */}
        <span
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "0.375rem",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: `${holdProgress}%`,
              background:
                "linear-gradient(90deg, rgba(37,99,235,0.75) 0%, rgba(59,130,246,0.9) 60%, rgba(147,197,253,1) 100%)",
              transition: "width 0.03s linear",
            }}
          />
        </span>

        {/* Ripple — plays after fill completes */}
        {isRippling && (
          <span
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              animation: "pullRipple 0.5s ease-out forwards",
              background: "rgba(186,230,253,0.45)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        )}
        <span className="relative z-10 tracking-widest">{children}</span>
      </button>
    );
  }
);
HoldButton.displayName = "HoldButton";

export { HoldButton };
