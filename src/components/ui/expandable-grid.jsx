"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ExpandableGrid({
  items,
  gridClassName = "grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch",
  cardClassName = "w-full text-left rounded-2xl border border-[rgba(0,0,0,0.1)] p-6 bg-white focus:outline-none transition-all hover:border-c-orange/40 hover:shadow-lg hover:-translate-y-0.5",
  disclaimer,
}) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="grid-system mt-12">
      <div className={`col-span-full md:col-start-2 md:col-end-6 ${gridClassName}`}>
        {items.map((c, i) => {
          const isOpen = expanded === i;
          return (
            <motion.button
              key={i}
              type="button"
              onClick={() => setExpanded(isOpen ? null : i)}
              className={cardClassName}
              layout
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
            >
              <motion.h4 className="text-xl font-semibold text-c-black" layout>
                {c.title}
              </motion.h4>
              {c.metric && (
                <motion.p className="mt-2 text-c-orange text-sm" layout>
                  {c.metric}
                </motion.p>
              )}
              {c.time && (
                <motion.p className="mt-1 text-c-black/50 text-sm" layout>
                  {c.time}
                </motion.p>
              )}
              {c.blurb && (
                <motion.p className="mt-4 text-c-black/70" layout>
                  {c.blurb}
                </motion.p>
              )}
              <AnimatePresence initial={false}>
                {isOpen && c.details && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4"
                  >
                    <div className="border-t border-[rgba(0,0,0,0.1)] pt-4">
                      <ul className="list-disc pl-5 text-c-black/70 space-y-2">
                        {c.details.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                      {disclaimer && (
                        <p className="text-xs text-c-black/40 mt-4">{disclaimer}</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}


