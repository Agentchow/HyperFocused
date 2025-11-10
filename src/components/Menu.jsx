"use client";
import React, { useCallback, useRef, useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

export default function Menu({
  position = "right",
  colors = ["#B19EEF", "#5227FF"],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  isFixed = true, // Default to fixed as requested
  accentColor = "#5227FF",
  onMenuOpen,
  onMenuClose,
}) {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const openRef = useRef(false);
  const [textLines, setTextLines] = useState(["Menu", "Close"]);

  // Custom easing
  const power4Out = [0.23, 1, 0.32, 1];
  const power3Out = [0.215, 0.61, 0.355, 1];
  const power3In = [0.55, 0.055, 0.675, 0.19];
  const power4InOut = [0.77, 0, 0.175, 1];

  const offscreenValue = position === "left" ? "-100%" : "100%";

  const animateOpen = useCallback(async () => {
    if (!scope.current) return;

    const panel = scope.current.querySelector(".staggered-menu-panel");
    const preLayers = Array.from(
      scope.current.querySelectorAll(".sm-prelayer")
    );
    const itemEls = Array.from(
      scope.current.querySelectorAll(".sm-panel-itemLabel")
    );
    const numberEls = Array.from(
      scope.current.querySelectorAll(
        ".sm-panel-list[data-numbering] .sm-panel-item"
      )
    );
    const socialTitle = scope.current.querySelector(".sm-socials-title");
    const socialLinks = Array.from(
      scope.current.querySelectorAll(".sm-socials-link")
    );

    // Animate prelayers
    if (preLayers.length > 0) {
      preLayers.forEach((layer, i) => {
        animate(
          layer,
          { x: ["100%", "0%"] },
          {
            duration: 0.5,
            ease: power4Out,
            delay: i * 0.07,
          }
        );
      });
    }

    // Animate panel
    const panelDelay = preLayers.length > 0 ? 0.05 : 0;
    const panelAnimation = animate(
      panel,
      { x: [offscreenValue, "0%"] },
      { duration: 0.65, ease: power4Out, delay: panelDelay }
    );

    // Animate items
    setTimeout(() => {
      if (itemEls.length > 0) {
        animate(
          itemEls,
          { y: ["140%", "0%"], rotate: [10, 0] },
          {
            duration: 1,
            ease: power4Out,
            delay: stagger(0.1),
          }
        );

        if (numberEls.length > 0) {
          setTimeout(() => {
            animate(
              numberEls,
              { "--sm-num-opacity": [0, 1] },
              {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94], // power2.out
                delay: stagger(0.08),
              }
            );
          }, 100);
        }
      }

      // Animate socials
      if (socialTitle || socialLinks.length > 0) {
        setTimeout(() => {
          if (socialTitle) {
            animate(
              socialTitle,
              { opacity: [0, 1] },
              { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
            );
          }
          if (socialLinks.length > 0) {
            setTimeout(() => {
              animate(
                socialLinks,
                { y: [25, 0], opacity: [0, 1] },
                {
                  duration: 0.55,
                  ease: power3Out,
                  delay: stagger(0.08),
                }
              );
            }, 40);
          }
        }, 0.65 * 1000 * 0.4);
      }
    }, 0.65 * 1000 * 0.15);

    await panelAnimation;
  }, [scope, animate, offscreenValue, power4Out, power3Out]);

  const animateClose = useCallback(async () => {
    if (!scope.current) return;

    const panel = scope.current.querySelector(".staggered-menu-panel");
    const preLayers = Array.from(
      scope.current.querySelectorAll(".sm-prelayer")
    );
    const all = [...preLayers, panel];

    await animate(
      all,
      { x: offscreenValue },
      { duration: 0.32, ease: power3In }
    );

    // Reset states
    const itemEls = Array.from(
      scope.current.querySelectorAll(".sm-panel-itemLabel")
    );
    const numberEls = Array.from(
      scope.current.querySelectorAll(
        ".sm-panel-list[data-numbering] .sm-panel-item"
      )
    );
    const socialTitle = scope.current.querySelector(".sm-socials-title");
    const socialLinks = Array.from(
      scope.current.querySelectorAll(".sm-socials-link")
    );

    if (itemEls.length > 0) {
      animate(itemEls, { y: "140%", rotate: 10 }, { duration: 0 });
    }
    if (numberEls.length > 0) {
      animate(numberEls, { "--sm-num-opacity": 0 }, { duration: 0 });
    }
    if (socialTitle) {
      animate(socialTitle, { opacity: 0 }, { duration: 0 });
    }
    if (socialLinks.length > 0) {
      animate(socialLinks, { y: 25, opacity: 0 }, { duration: 0 });
    }
  }, [scope, animate, offscreenValue, power3In]);

  const animateIcon = useCallback(
    (opening) => {
      // Select from document since header is now outside the scope
      const h = document.querySelector(
        ".sm-toggle .sm-icon-line:not(.sm-icon-line-v)"
      );
      const v = document.querySelector(".sm-toggle .sm-icon-line-v");

      if (!h || !v) return; // Guard clause

      if (opening) {
        animate(h, { rotate: 45 }, { duration: 0.5, ease: power4Out });
        animate(v, { rotate: -45 }, { duration: 0.5, ease: power4Out });
      } else {
        animate(h, { rotate: 0 }, { duration: 0.35, ease: power4InOut });
        animate(v, { rotate: 90 }, { duration: 0.35, ease: power4InOut });
      }
    },
    [animate, power4Out, power4InOut]
  );

  const animateText = useCallback(
    (opening) => {
      const currentLabel = opening ? "Menu" : "Close";
      const targetLabel = opening ? "Close" : "Menu";
      const cycles = 3;

      const seq = [currentLabel];
      let last = currentLabel;
      for (let i = 0; i < cycles; i++) {
        last = last === "Menu" ? "Close" : "Menu";
        seq.push(last);
      }
      if (last !== targetLabel) seq.push(targetLabel);
      seq.push(targetLabel);

      setTextLines(seq);

      // Select from document since header is now outside the scope
      const inner = document.querySelector(".sm-toggle .sm-toggle-textInner");

      if (inner) {
        const lineCount = seq.length;
        const finalShift = ((lineCount - 1) / lineCount) * 100;

        animate(
          inner,
          { y: [`0%`, `-${finalShift}%`] },
          { duration: 0.5 + lineCount * 0.07, ease: power4Out }
        );
      }
    },
    [animate, power4Out]
  );

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) {
      onMenuOpen?.();
      animateOpen();
    } else {
      onMenuClose?.();
      animateClose();
    }

    animateIcon(target);
    animateText(target);
  }, [
    animateOpen,
    animateClose,
    animateIcon,
    animateText,
    onMenuOpen,
    onMenuClose,
  ]);

  // Process colors
  const processedColors = (() => {
    const raw =
      colors && colors.length ? colors.slice(0, 4) : ["#1e1e22", "#35353c"];
    let arr = [...raw];
    if (arr.length >= 3) {
      const mid = Math.floor(arr.length / 2);
      arr.splice(mid, 1);
    }
    return arr;
  })();

  return (
    <>
      {/* MENU TOGGLE BUTTON - positioned top-right (or left) and fixed */}
      <motion.button
        className={`sm-toggle fixed top-[2em]  ${
          position === "left"
            ? "left-[16px] md:left-[32px]"
            : "right-[16px] md:right-[32px]"
        }
          relative inline-flex  md:text-xl items-center gap-[0.2rem] bg-transparent border-0 cursor-pointer 
          font-medium leading-none overflow-visible pointer-events-auto text-white mix-blend-difference  
           z-50`} // Increased z-index for button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="staggered-menu-panel"
        onClick={toggleMenu}
        type="button"
      >
        <span
          className="sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap w-[var(--sm-toggle-width,auto)] min-w-[var(--sm-toggle-width,auto)]"
          aria-hidden="true"
        >
          <span className="sm-toggle-textInner flex flex-col leading-none">
            {textLines.map((l, i) => (
              <span
                className="sm-toggle-line block h-[1em] leading-none"
                key={i}
              >
                {l}
              </span>
            ))}
          </span>
        </span>

        <span
          className="sm-icon relative w-[14px] h-[14px] shrink-0 inline-flex items-center justify-center"
          aria-hidden="true"
        >
          <motion.span
            className="sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2"
            initial={{ rotate: 0 }}
          />
          <motion.span
            className="sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2"
            initial={{ rotate: 90 }}
          />
        </span>
      </motion.button>

      {/* SCOPE WRAPPER: Contains only panels */}
      <div
        ref={scope}
        className={`sm-scope z-40 ${
          isFixed
            ? "fixed top-0 left-0 w-screen h-screen overflow-hidden"
            : "absolute top-0 left-0 w-full h-full overflow-hidden"
        } pointer-events-none`}
      >
        <div
          className={
            (className ? className + " " : "") +
            "staggered-menu-wrapper relative w-full h-full"
          }
          style={accentColor ? { ["--sm-accent"]: accentColor } : undefined}
          data-position={position}
          data-open={open || undefined}
        >
          <div
            className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]"
            aria-hidden="true"
          >
            {processedColors.map((c, i) => (
              <motion.div
                key={i}
                className="sm-prelayer absolute top-0 right-0 h-full w-full"
                style={{ background: c }}
                initial={{ x: offscreenValue }}
              />
            ))}
          </div>

          <motion.aside
            id="staggered-menu-panel"
            className="staggered-menu-panel absolute top-0 right-0 h-full bg-white flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-10 backdrop-blur-[12px] pointer-events-auto"
            style={{ WebkitBackdropFilter: "blur(12px)" }}
            initial={{ x: offscreenValue }}
            aria-hidden={!open}
          >
            <div className="sm-panel-inner flex-1 flex flex-col gap-5">
              <ul
                className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2"
                role="list"
                data-numbering={displayItemNumbering || undefined}
              >
                {items && items.length ? (
                  items.map((it, idx) => (
                    <li
                      className="sm-panel-itemWrap relative overflow-hidden leading-none"
                      key={it.label + idx}
                    >
                      <a
                        className="sm-panel-item relative text-[#1a1a1a] font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]"
                        href={it.link}
                        aria-label={it.ariaLabel}
                        data-index={idx + 1}
                      >
                        <motion.span
                          className="sm-panel-itemLabel text-[#1a1a1a] hover:opacity-90 font-medium inline-block [transform-origin:50%_100%]"
                          initial={{ y: "140%", rotate: 10 }}
                        >
                          {it.label}
                        </motion.span>
                      </a>
                    </li>
                  ))
                ) : (
                  <li
                    className="sm-panel-itemWrap relative overflow-hidden leading-none"
                    aria-hidden="true"
                  >
                    <span className="sm-panel-item relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]">
                      <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%]">
                        No items
                      </span>
                    </span>
                  </li>
                )}
              </ul>

              {displaySocials && socialItems && socialItems.length > 0 && (
                <div
                  className="sm-socials mt-auto pt-8 flex flex-col gap-3"
                  aria-label="Social links"
                >
                  <motion.h3
                    className="sm-socials-title m-0 text-base font-medium [color:var(--sm-accent,#ff0000)]"
                    initial={{ opacity: 0 }}
                  >
                    Socials
                  </motion.h3>
                  <ul
                    className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap"
                    role="list"
                  >
                    {socialItems.map((s, i) => (
                      <li key={s.label + i} className="sm-socials-item">
                        <motion.a
                          href={s.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sm-socials-link text-[1.2rem] font-medium text-[#111] no-underline relative inline-block py-[2px] transition-[color,opacity] duration-300 ease-linear"
                          initial={{ y: 25, opacity: 0 }}
                        >
                          {s.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.aside>
        </div>

        <style>{`
          .sm-toggle { position: fixed; top: 2em; right: 2em; z-index: 9999; } /* Ensure the toggle is on top */
          .sm-toggle:focus-visible { outline: 2px solid #ffffffaa; outline-offset: 4px; border-radius: 4px; }
          .sm-toggle-textWrap { position: relative; margin-right: 0.5em; display: inline-block; height: 1em; overflow: hidden; white-space: nowrap; width: var(--sm-toggle-width, auto); min-width: var(--sm-toggle-width, auto); }
          .sm-toggle-textInner { display: flex; flex-direction: column; line-height: 1; }
          .sm-toggle-line { display: block; height: 1em; line-height: 1; }
          .sm-icon { position: relative; width: 14px; height: 14px; flex: 0 0 14px; display: inline-flex; align-items: center; justify-content: center; }
          .sm-panel-itemWrap { position: relative; overflow: hidden; line-height: 1; }
          .sm-icon-line { position: absolute; left: 50%; top: 50%; width: 100%; height: 2px; background: currentColor; border-radius: 2px; transform: translate(-50%, -50%); }
          .sm-scope { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; overflow: hidden; pointer-events: none; z-index: 40; } /* Ensure scope is fixed and covers screen */
          .sm-scope .staggered-menu-wrapper { position: relative; width: 100%; height: 100%; }
          .sm-scope .staggered-menu-panel { position: absolute; top: 0; right: 0; width: clamp(260px, 38vw, 420px); height: 100%; background: white; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; flex-direction: column; padding: 6em 2em 2em 2em; overflow-y: auto; }
          .sm-scope [data-position='left'] .staggered-menu-panel { right: auto; left: 0; }
          .sm-scope .sm-prelayers { position: absolute; top: 0; right: 0; bottom: 0; width: clamp(260px, 38vw, 420px); pointer-events: none; z-index: 5; }
          .sm-scope [data-position='left'] .sm-prelayers { right: auto; left: 0; }
          .sm-scope .sm-prelayer { position: absolute; top: 0; right: 0; height: 100%; width: 100%; transform: translateX(0); }
          .sm-scope .sm-panel-inner { flex: 1; display: flex; flex-direction: column; gap: 1.25rem; }
          .sm-scope .sm-socials { margin-top: auto; padding-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
          .sm-scope .sm-socials-title { margin: 0; font-size: 1rem; font-weight: 500; color: var(--sm-accent, #ff0000); }
          .sm-scope .sm-socials-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: row; align-items: center; gap: 1rem; flex-wrap: wrap; }
          .sm-scope .sm-socials-list .sm-socials-link { opacity: 1; transition: opacity 0.3s ease; }
          .sm-scope .sm-socials-list:hover .sm-socials-link:not(:hover) { opacity: 0.35; }
          .sm-scope .sm-socials-list:focus-within .sm-socials-link:not(:focus-visible) { opacity: 0.35; }
          .sm-scope .sm-socials-list .sm-socials-link:hover,
          .sm-scope .sm-socials-list .sm-socials-link:focus-visible { opacity: 1; }
          .sm-scope .sm-socials-link:focus-visible { outline: 2px solid var(--sm-accent, #ff0000); outline-offset: 3px; }
          .sm-scope .sm-socials-link { font-size: 1.2rem; font-weight: 500; color: #111; text-decoration: none; position: relative; padding: 2px 0; display: inline-block; transition: color 0.3s ease, opacity 0.3s ease; }
          .sm-scope .sm-socials-link:hover { color: var(--sm-accent, #ff0000); }
          .sm-scope .sm-panel-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
          .sm-scope .sm-panel-item { position: relative; color: #000; font-weight: 600; font-size: 4rem; cursor: pointer; line-height: 1; letter-spacing: -2px; text-transform: uppercase; transition: background 0.25s, color 0.25s; display: inline-block; text-decoration: none; padding-right: 1.4em; }
          .sm-scope .sm-panel-itemLabel { display: inline-block; transform-origin: 50% 100%; }
          .sm-scope .sm-panel-item:hover { color: var(--sm-accent, #ff0000); }
          .sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
          .sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { counter-increment: smItem; content: counter(smItem, decimal-leading-zero); position: absolute; top: 0.1em; right: 3.2em; font-size: 18px; font-weight: 400; color: var(--sm-accent, #ff0000); letter-spacing: 0; pointer-events: none; user-select: none; opacity: var(--sm-num-opacity, 0); }

          @media (max-width: 1024px) {
            .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; }
            .sm-scope .sm-prelayers { width: 100%; left: 0; right: 0; }
          }
        `}</style>
      </div>
    </>
  );
}
