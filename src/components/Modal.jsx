"use client";
import React from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { CirclePlus, CircleX } from "lucide-react";
export default function Modal({
  title,
  description,
  Icon,
  children,
  className,
  content,
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const id = React.useId();
  function handleClick() {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  }
  return (
    <LayoutGroup>
      <AnimatePresence>
        {isOpen ? (
          <ModalOpened
            key="closed"
            id={id}
            handleClick={handleClick}
            title={title}
            description={description}
            Icon={Icon}
          >
            {content}
          </ModalOpened>
        ) : (
          <motion.section
            onClick={handleClick}
            key="opened"
            className={`px-6  pt-8 pb-20 bg-[#111111] rounded-2xl max-w-xl relative hover:bg-[#222222] min-h-[600px] transition-all hover:ring-1 hover:ring-white/10 hover:-translate-y-0.5 ${className}`}
            layoutId={`${id}-card`}
          >
            <motion.h3
              layoutId={`${id}-title`}
              className="text-[32px] text-white/60"
            >
              {title}
            </motion.h3>
            <motion.div layoutId={`${id}-image`}>
              {Icon &&
                React.cloneElement(Icon, {
                  className: "h-auto justify-self-center w-[80%] mx-auto", // your custom Tailwind classes
                })}
            </motion.div>

            <motion.p
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.12 }}
              // layoutId={`${id}-description`}
              className="text-white/40"
            >
              {description}
            </motion.p>

            <motion.button className="absolute right-5 bottom-5 cursor-pointer ">
              <CirclePlus
                className="text-[#666] hover:text-white/60  transition-all"
                strokeWidth={1}
                size={48}
              />
            </motion.button>
          </motion.section>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

function ModalOpened({ id, handleClick, title, Icon, children }) {
  return (
    <AnimatePresence>
      <motion.div
        key="closed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.12 }}
        className="fixed inset-0 bg-black z-10"
        onClick={handleClick}
      />
      <motion.section
        className="fixed top-[10%] h-[calc(90%)]  left-1/2 -translate-x-1/2 bg-[#111111] z-20 px-2 pb-8 pt-20   md:pt-32  rounded-2xl w-full max-w-4xl mx-auto "
        layoutId={`${id}-card`}
      >
        <div className="mx-auto h-full overflow-y-auto scrollbar">
          <motion.h3
            layoutId={`${id}-title`}
            className=" text-2xl md:text-4xl text-white/60 text-center "
          >
            {title}
          </motion.h3>
          <motion.div layoutId={`${id}-image`}>
            {Icon &&
              React.cloneElement(Icon, {
                className: "w-[70%] mx-auto h-auto", // your custom Tailwind classes
              })}
          </motion.div>
          <div className="mx-auto  w-full max-w-lg ">
            <motion.div
              className="text-white/40 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.1,
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
              exit={{ opacity: 0 }}
            >
              {children}
            </motion.div>
          </div>

          <motion.button
            className="absolute top-5 right-5 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.12 }}
            exit={{ opacity: 0 }}
            onClick={handleClick}
          >
            <CircleX
              className="text-[#666] hover:text-white/60 transition-all"
              strokeWidth={1}
              size={48}
            />
          </motion.button>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
