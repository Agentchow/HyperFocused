"use client";
import React from "react";
import TitleCard from "./TitleCard";
import { motion } from "motion/react";

export default function Metrics() {
  const metrics = [
    { value: "$120M", label: "Assets Under Management (AUM)" },
    { value: "19.4%", label: "Net IRR (Fund I)" },
    { value: "1.90×", label: "TVPI (Fund I)" },
    { value: "1.20×", label: "DPI (Fund I)" },
    { value: "12 / 34", label: "Platforms / Add‑ons" },
    { value: "8", label: "Exits" },
    { value: "38%", label: "Average portfolio EBITDA margin" },
    { value: "3.1×", label: "Average acquisition multiple" },
    {
      value: "42% YoY",
      label: "Aggregate revenue growth across operating companies",
    },
    {
      value: "150%+",
      label:
        "Average Year-1 cash-on-cash return on optimized small-business acquisitions",
    },
    {
      value: "<30 Days",
      label: "Average diligence-to-close timeline per deal",
    },
    { value: "90%+", label: "Client retention rate in operating companies" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 50,
        stiffness: 300,
        restDelta: 0.0001,
      },
    },
  };

  return (
    <div>
      <TitleCard
        title="Key Metrics"
        description="Fund performance and operating KPIs at a glance"
        tagline={"AT A GLANCE"}
      />
      {/* Combined Grid */}
      <section className="mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-24 grid-system">
        <div className="col-span-full 2xl:col-start-2 2xl:col-end-6 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:gap-x-16 2xl:gap-y-32 xl:gap-x-12 xl:gap-y-24 lg:gap-x-8 gap-y-20"
          >
            {metrics.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col items-start sm:items-center lg:items-start text-left"
              >
                <div className="text-4xl md:text-5xl font-regular">
                  {stat.value}
                </div>
                <div className="opacity-60 text-sm md:text-base leading-snug mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-xs text-c-black/40 mt-4">
            Past performance is not indicative of future results. Metrics shown are illustrative mock values.
          </p>
        </div>
      </section>
    </div>
  );
}
