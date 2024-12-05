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
        <Link href="/ada-dan-berlipat-ganda">
          <h2>Ada dan Berlipat Ganda</h2>
        </Link>
        <p>Lantai 1</p>
      </div>
      <span className={styles.border}></span>
      <div className={styles.list}>
        <Link href="artist-proof">
          <h2>
            Artist Proof
            <p> Wajah, Praktik, dan Arena Seni Cetak Grafis Kontemporer</p>
          </h2>
        </Link>
        <p>Lantai 2</p>
      </div>
      <span className={styles.border}></span>
      <div className={styles.list}>
        <Link href="cetak-aksi">
          <h2>Cetak Aksi: Dari Kamar Gelap ke Lapak Terang</h2>
        </Link>
        <p>Lantai 3</p>
      </div>
      <span className={styles.border}></span>
    </div>
  );
}
