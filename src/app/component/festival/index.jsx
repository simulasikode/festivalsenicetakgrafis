import styles from "./festival.module.scss";

export default function Festival() {
  return (
    <div>
      <div className={styles.festival}>
        <h1>Festival</h1>
        <div className={styles.container}>
          <div className={styles.table}>
            <span>Program Festival</span>
            <span>Program Simposium</span>
            <span>Program Publik</span>
            <span>Program Kolaborasi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
