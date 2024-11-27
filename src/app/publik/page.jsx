import styles from "./publik.module.scss";

export default function Publik() {
  return (
    <div className={styles.publik}>
      <h1>Program Publik</h1>
      <div className={styles.caption}>
        <p>
          Program Publik Festival Seni Cetak Grafis ‘Trilogia’ dirancang untuk
          melibatkan publik secara langsung melalui dua program utama: Aktivasi
          Pameran dan Aktivasi Studio.
        </p>
      </div>
    </div>
  );
}
