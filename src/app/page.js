import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>Festival Seni Cetak Grafis</p>
        <span>Trilogia</span>
      </main>
    </div>
  );
}
