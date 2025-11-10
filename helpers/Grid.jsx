import React from "react";
import { range } from "./utils";
export default function Grid() {
  return (
    <section className="grid-system fixed top-0 pointer-events-none">
      {range(6).map((i) => (
        <Column key={i} />
      ))}
    </section>
  );
}

function Column() {
  return (
    <div className="opacity-10 bg-red-300 w-full h-screen border-x-2 border-dashed border-red-500 " />
  );
}
