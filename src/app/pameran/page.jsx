import styles from "./pameran.module.scss";

export default function PameranPage() {
  return (
    <div className={styles.pameran}>
      <div className={styles.heading}>Program Pameran</div>
      <div className={styles.list}>
        <p>
          Menjelang hari gemilang<span>Pengantar Pameran</span>
        </p>

        <p>
          Ada dan Berlipat Ganda<span>Lantai 1</span>
        </p>

        <p>
          Cetak Grafis Kontemporer: Wajah, Praktik dan Arena
          <span>Lantai 2</span>
        </p>

        <p>
          Cetak Aksi: Dari Kamar Gelap ke Lapak Terang<span>Lantai 3</span>
        </p>
      </div>
    </div>
  );
}
