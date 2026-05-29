"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export interface CountdownTimerProps {
  passTime: string;
  totalDurationSeconds?: number;
}

export function CountdownTimer({ 
  passTime, 
  totalDurationSeconds = 24 * 60 * 60 
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      const diff = new Date(passTime).getTime() - Date.now();
      const remaining = Math.max(0, Math.ceil(diff / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
      }
    };

    // Run once immediately
    update();
    
    // Set interval for subsequent updates
    const interval = setInterval(update, 1000);
    
    return () => clearInterval(interval);
  }, [passTime]);

  const isDone = timeLeft <= 0;

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  // Calculate progress percentage based on the total duration window
  const progress = Math.max(
    0,
    Math.min(100, ((totalDurationSeconds - timeLeft) / totalDurationSeconds) * 100)
  );

  if (isDone) {
    return (
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative overflow-hidden w-20 h-7 flex items-center justify-center rounded-md bg-emerald-500/10 text-xs text-emerald-400 font-medium tracking-wide"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 0.7, ease: "linear", delay: 0.1 }}
          className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-emerald-200/20 to-transparent skew-x-[-20deg]"
        />
        <span className="z-10">DONE</span>
      </motion.div>
    );
  }

  return (
    <div className="relative w-20 h-7 rounded border-2 border-primary/30 bg-primary/5 flex items-center justify-center overflow-hidden">
      {/* Animated fill border */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-primary/20 transition-all duration-1000"
        style={{ height: `${progress}%` }}
      />
      <span className="text-[10px] text-primary font-medium z-10">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
}
