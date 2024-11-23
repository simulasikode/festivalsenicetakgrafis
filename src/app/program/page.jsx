import styles from "./program.module.scss";

export default function Program() {
  return (
    <div className={styles.program}>
      <h1>Program Festival</h1>
      <div className={styles.table}>
        <p>Pameran</p>
        <p>Kolaborasi</p>
        <p>Simposium</p>
        <p>Publik</p>
      </div>
    </div>
  );
}
