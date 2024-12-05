import Image from "next/image";
import hero from "../../../../public/break.webp";
import styles from "./break.module.scss";

export default function Break() {
  return (
    <Image
      alt="Key Visual"
      src={hero}
      placeholder="blur"
      quality={100}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
      }}
      className={styles.break}
    />
  );
}
