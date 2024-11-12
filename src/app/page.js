"use client";
import Intro from "./component/intro";
import styles from "./page.module.scss";
import { motion } from "framer-motion";

export default function Home() {
  return (
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
          delay: 0.6,
          duration: 1,
        }}
      >
        <Intro />
      </motion.div>
    </div>
  );
}
