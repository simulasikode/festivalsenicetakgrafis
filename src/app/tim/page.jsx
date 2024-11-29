import styles from "./tim.module.scss";

export default function TimPage() {
  return (
    <div className={styles.tim}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>
            Tim Kerja <span>Festival Seni Cetak Grafis: Trilogia</span>
          </h1>
        </div>
      </div>
      <span className={styles.border}></span>
      <div className={styles.list}>
        <p>tim keseluruhan festival</p>
      </div>
    </div>
  );
}
