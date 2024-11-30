import Image from "next/image";
import hero from "../../../../public/hero_home.webp";
import styles from "./hero.module.scss";

export default function Background() {
  return (
    <Image
      alt="Key Visual"
      src={hero}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      className={styles.hero}
    />
  );
}
