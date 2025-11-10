"use client";
import React from "react";

export default function LazyVideo() {
  const [isVisible, setIsVisible] = React.useState(false);
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div ref={videoRef} className="w-full max-w-2xl">
      {isVisible ? (
        <video
          preload="none"
          src="/hyper.mp4"
          playsInline
          muted
          autoPlay
          loop
          className="w-full aspect-square"
        />
      ) : (
        <div className="aspect-square w-full  max-w-2xl" />
      )}
    </div>
  );
}
