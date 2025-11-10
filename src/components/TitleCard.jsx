import React from "react";
import TagLine from "./TagLine";

export default function TitleCard({
  className,
  underline,
  title,
  description,
  tagline,
  titleClassName,
  descriptionClassName,
}) {
  return (
    <div className="grid-system mt-16 md:mt-32 ">
      <div
        className={`md:col-start-2 w-full md:col-end-6  flex flex-col-reverse md:flex-col py-3 md:py-6 ${
          underline ? "border-b border-c-black" : ""
        } ${className}`}
      >
        <div className={`md:col-start-2 md:col-end-5  my-3 md:my-6`}>
          <h1
            className={` 2xl:text-[64px] text-4xl md:text-5xl lg:text-6xl font-semibold col-span-full lg:col-start-2 lg:col-span-2 ${titleClassName}`}
          >
            {title}
          </h1>
          <p
            className={`mt-3 2xl:text-2xl xl:text-xl lg:text-lg col-start-2 col-end-4 max-w-[55ch] ${descriptionClassName}`}
          >
            {description}
          </p>
        </div>
        <div className="md:col-start-1 col-end-5 w-fit h-fit justify-self-end md:self-end">
          {tagline && <TagLine text={tagline} />}
        </div>
      </div>
    </div>
  );
}
