"use client";
import Background from "../hero";
import styles from "./intro.module.scss";
import Link from "next/link";
import CarbonArrowUpRight from "../CarbonArrowUpRight";

export default function Intro() {
  return (
    <div className={styles.main}>
      <Background />
      <div className={styles.hero}>
        <span>Festival Seni Cetak Grafis:</span>
        <div className={styles.title}>
          <div className={styles.title}>
            <h3> Trilogia</h3>
          </div>
        </div>
      </div>
      <div className={styles.paragraf}>
        <p>
          Festival Seni Cetak Grafis “Trilogia” merupakan upaya Krack sebagai
          kelompok pegiat seni cetak grafis untuk merayakan praktik dan
          pengetahuan yang senantiasa berkembang luas dan terepresentasi dalam
          seni cetak grafis. Watak seni cetak grafis yang distributif,
          repetitif, dan reproduktif akan kami jadikan pintu masuk untuk
          membicarakan berbagai topik dalam dinamika sosial budaya masyarakat.
        </p>
        <div className={styles.continue}>
          <button type="button">
            <Link href="/tentang">Baca Selanjutnya</Link>
            <CarbonArrowUpRight id="img" />
          </button>
        </div>
      </div>
    </div>
  );
}
