import Image from "next/image";
import hero from "../../../../public/home_hero.webp";
import styles from "./hero.module.scss";

export default function Background() {
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
      className={styles.hero}
    />
  );
}
