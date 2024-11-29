import styles from "./pameran.module.scss";
import Link from "next/link";
export default function PameranPage() {
  return (
    <div className={styles.pameran}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Program Pameran</h1>
        </div>
      </div>
      <span className={styles.border}></span>

      <div className={styles.list}>
        <Link href="pengantar">
          <h2>Menjelang Hari Gemilang</h2>
        </Link>
        <p>Pengantar Kuratorial</p>
      </div>
      <span className={styles.border}></span>

      <div className={styles.list}>
        <h2>Ada dan Berlipat Ganda</h2>
        <p>Lantai 1</p>
      </div>
      <span className={styles.border}></span>
      <div className={styles.list}>
        <h2>Cetak Grafis Kontemporer: Wajah, Praktik dan Arena</h2>
        <p>Lantai 2</p>
      </div>
      <span className={styles.border}></span>
      <div className={styles.list}>
        <h2>Cetak Aksi: Dari Kamar Gelap ke Lapak Terang</h2>
        <p>Lantai 3</p>
      </div>
      <span className={styles.border}></span>
    </div>
  );
}
