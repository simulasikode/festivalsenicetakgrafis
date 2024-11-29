import Image from "next/image";
import styles from "./tim.module.scss";
import Link from "next/link";

export default function Tim() {
  return (
    <div>
      <div className={styles.tim}>
        <h1>Tim Festival </h1>
        <span className={styles.border}></span>
        <div className={styles.container}>
          <div className={styles.grid}>
            <h2>Sukma Smita Grah Brilianesti</h2>
            <span>Direktur Festival</span>
          </div>
          <div className={styles.pointer}>
            <Image src="LightArrow.svg" alt="Next" width={48} height={48} />
          </div>
        </div>
        <span className={styles.border}></span>
        <div className={styles.container}>
          <div className={styles.grid}>
            <h2>Agung Kurniawan</h2>
            <span>Direktur artistik</span>
          </div>
          <div className={styles.pointer}>
            <Image src="LightArrow.svg" alt="Next" width={48} height={48} />
          </div>
        </div>
        <span className={styles.border}></span>
        <div className={styles.more}>
          <Link href="/tim">
            <span>Lihat keseluruhan tim festival</span>
          </Link>
          <Image src="LightArrow.svg" alt="Next" width={32} height={32} />
        </div>
      </div>
    </div>
  );
}
