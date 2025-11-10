"use client";
import { useAnimate, stagger, useInView } from "motion/react";
import { useEffect, useCallback, useRef } from "react";

const TextAnimation = ({ children, label, className }) => {
  const [scope, animate] = useAnimate();
  const hasAnimated = useRef(false);
  const isInView = useInView(scope);

  const randomReveal = useCallback(async () => {
    let arr = Array.from({ length: String(label).length }, (_, i) => i);
    arr.sort(() => Math.random() - 0.5);

    await animate(
      ".label",
      { opacity: 1 },
      { delay: (i) => arr[i] * 0.1, duration: 0 }
    );
    await animate(".main", { opacity: 0 }, { delay: 0.3, duration: 0 });
    await animate(
      ".final",
      { opacity: 1, pointerEvents: "auto" },
      { delay: stagger(0.02), duration: 0 }
    );
  }, [label, animate]);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      randomReveal();
      hasAnimated.current = true;
    }
  }, [isInView, randomReveal]);

  return (
    <main ref={scope} className={`${className} relative`}>
      <div className="absolute top-0 left-0">
        {String(label)
          .split("")
          .map((letter, index) => (
            <span className="main label opacity-0" key={index}>
              {letter}
            </span>
          ))}
      </div>
      <div>
        {String(children)
          .split("")
          .map((letter, index) => (
            <span className="final opacity-0 pointer-events-none" key={index}>
              {letter}
            </span>
          ))}
      </div>
    </main>
  );
};

export default TextAnimation;
