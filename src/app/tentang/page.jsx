import styles from "./tentang.module.scss";

export default function TentangPage() {
  return (
    <div className={styles.tentang}>
      <h1>Tentang</h1>
      <div className={styles.container}>
        <p>Festival</p>
        <p>Krack! Studio</p>
      </div>
    </div>
  );
}
