import styles from "./program.module.scss";
import Link from "next/link";

export default function ProgramPage() {
  return (
    <div className={styles.program}>
      <div className={styles.head}>
        <h1>Program</h1>
        <p>Festival Seni Cetak Grafis 2024</p>
      </div>
      <span className={styles.border}></span>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Link href="/pameran">
            <h2>Pameran</h2>
          </Link>
        </div>
        <div className={styles.date}>
          <span>Galeri R.J. Katamsi ISI, Yogyakarta</span>
        </div>
      </div>
      <span className={styles.border}></span>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Link href="/simposium">
            <h2>Simposium</h2>
          </Link>
        </div>
        <div className={styles.date}>
          <span>Universitas Sanata Darma, Yogyakarta</span>
        </div>
      </div>
      <span className={styles.border}></span>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Link href="/kolaborasi">
            <h2>Kolaborasi</h2>
          </Link>
        </div>
        <div className={styles.date}>
          <span>Yogyakarta, Kupang, Jakarta</span>
        </div>
      </div>
      <span className={styles.border}></span>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Link href="/publik">
            <h2>Publik</h2>
          </Link>
        </div>
        <div className={styles.date}>
          <span>Yogyakarta, Bali, Jakarta</span>
        </div>
      </div>
    </div>
  );
}
