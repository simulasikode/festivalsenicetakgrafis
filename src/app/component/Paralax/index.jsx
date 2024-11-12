"use client";
import gsap from "gsap";
import styles from "./paralax.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Paralax() {
  gsap.to("[data-speed]", {
    y: (i, el) =>
      (1 - parseFloat(el.getAttribute("data-speed"))) *
      ScrollTrigger.maxScroll(window),
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      invalidateOnRefresh: true,
      scrub: 0,
    },
  });
  return (
    <div className={styles.paralax} data-speed="0.75">
      Paralax
    </div>
  );
}
