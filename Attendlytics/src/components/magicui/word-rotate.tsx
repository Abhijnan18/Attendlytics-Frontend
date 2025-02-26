"use client";

import { AnimatePresence, motion, MotionProps } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const [rotationCount, setRotationCount] = useState(0);

  useEffect(() => {
    if (rotationCount < words.length) {
      const timer = setTimeout(() => {
        if (rotationCount === words.length - 1) {
          // On the last rotation, go back to the first element...
          setIndex(0);
        } else {
          // Otherwise, move to the next word.
          setIndex(rotationCount + 1);
        }
        setRotationCount(rotationCount + 1);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [rotationCount, words.length, duration]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1 key={words[index]} className={cn(className)} {...motionProps}>
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
