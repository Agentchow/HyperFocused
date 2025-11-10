"use client";
import React from "react";
import TextAnimation from "./TextAnimation";
import { cubicBezier, motion } from "motion/react";
export default function TagLine({ text, className }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.div
        className="size-2.5 bg-c-orange"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
          transition: {
            duration: 1.7,
            times: [
              0, 0.125, 0.125, 0.25, 0.25, 0.375, 0.375, 0.5, 0.5, 0.625, 0.625,
              0.75, 0.75, 0.875, 0.875, 1,
            ],
            ease: "linear",
          },
        }}
        viewport={{ once: true }}
      />
      <TextAnimation
        className="text-c-orange text-xs lg:text-sm font-semibold"
        label={text}
      >
        {text}
      </TextAnimation>
    </div>
  );
}
