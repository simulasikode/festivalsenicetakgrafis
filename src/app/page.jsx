"use client";
import Festival from "./component/festival";
import Intro from "./component/intro";
import styles from "./page.module.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Tim from "./component/tim";

export default function Home() {
  useEffect(() => {
    // Dynamically load the Google Translate script after the page loads
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div>
      <div className={styles.page}>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
        >
          <Intro />
        </motion.div>
      </div>
      <Festival />
      <Tim />
    </div>
  );
}
