import Link from "next/link";
import styles from "./festival.module.scss";

export default function Festival() {
  return (
    <div>
      <div className={styles.festival}>
        <h1>Program Festival</h1>
        <span className={styles.border}></span>
        <div className={styles.container}>
          <div className={styles.grid}>
            <Link href="/pameran">
              <h2>Pameran</h2>
            </Link>

            <p>Menjelang Hari Gemilang</p>
          </div>
          <div className={styles.date}>
            <span>7-20 Desember 2024 —</span>
            <span>Galeri R.J. Katamsi ISI, Yogyakarta</span>
          </div>
        </div>
        <span className={styles.border}></span>
        <div className={styles.container}>
          <div className={styles.grid}>
            <Link href="/simposium">
              <h2>Simposium</h2>
            </Link>
            <p>Simposium Seni Cetak Grafis: Melihat Watak Bekerja</p>
          </div>
          <div className={styles.date}>
            <span>13-15 Desember 2024 —</span>
            <span>Universitas Sanata Dharma, Yogyakarta</span>
          </div>
        </div>
        <span className={styles.border}></span>
      </div>
    </div>
  );
}
