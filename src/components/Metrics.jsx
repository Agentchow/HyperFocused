"use client";
import React from "react";
import TitleCard from "./TitleCard";
import { motion } from "motion/react";

export default function Metrics() {
  const stats = [
    { value: "950k", label: "in partnered or under management assets" },
    {
      value: "$1.05M+",
      label: "Equity capital deployed across digital and physical assets",
    },
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
    { value: "$10M+", label: "Target AUM by 2027" },
    {
      value: "12%",
      label: "Average SBA loan rate assumption in current financing models",
    },
    {
      value: "$25K–$75K",
      label: "Typical equity check size per limited partner (LP) syndication",
    },
    {
      value: "7.8 Months",
      label: "Average turnaround to profitability improvement",
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
        description="Proven operational excellence and strong fundamentals across portfolio companies"
        tagline={"TRACK RECORD"}
      />
      <section className="mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-24 grid-system">
        <div className="col-span-full 2xl:col-start-2 2xl:col-end-6 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:gap-x-16 2xl:gap-y-32 xl:gap-x-12 xl:gap-y-24 lg:gap-x-8 gap-y-20"
          >
            {stats.map((stat, i) => (
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
        </div>
      </section>
    </div>
  );
}
