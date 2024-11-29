import styles from "./festival.module.scss";

export default function Festival() {
  return (
    <div>
      <div className={styles.festival}>
        <h1>Program Festival</h1>
        <span className={styles.border}></span>
        <div className={styles.container}>
          <div className={styles.grid}>
            <h2>Pameran</h2>
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
            <h2>Simposium</h2>
            <p>Simposium Seni Cetak Grafis: Melihat Watak Bekerja</p>
          </div>
          <div className={styles.date}>
            <span>13-15 Desember 2024 —</span>
            <span>Universitas Sanata Darma, Yogyakarta</span>
          </div>
        </div>
        <span className={styles.border}></span>
      </div>
    </div>
  );
}
