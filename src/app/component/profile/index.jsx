import styles from "./profile.module.scss";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <h1>Profile</h1>
      <div className={styles.grid}>
        <div className={styles.festival}>
          <h2>Festival</h2>
          <p>
            Festival Seni Cetak Grafis “Trilogia” merupakan upaya Krack sebagai
            kelompok pegiat seni cetak grafis untuk merayakan praktik dan
            pengetahuan yang senantiasa berkembang luas dan terepresentasi dalam
            seni cetak grafis. Watak seni cetak grafis yang distributif,
            repetitif, dan reproduktif akan kami jadikan pintu masuk untuk
            membicarakan berbagai topik dalam dinamika sosial budaya masyarakat.
          </p>
        </div>
        <div className={styles.krack}>
          <h2>Krack! Studiio</h2>
          <p>
            Krack! merupakan kelompok seni cetak grafis yang berdomisili di
            Yogyakarta. Berdiri pada 2013, inisiasi kerja Krack! dimulai dengan
            produksi artistik karya cetak dan fasilitasi berbagai diskusi serta
            presentasi karya cetak melalui ruang fisik yang terdiri dari galeri,
            studio dan ruang bersama. Hari ini, selama lebih dari 10 tahun,
            Krack! terus konsisten untuk berkontribusi pada perkembangan seni
            cetak grafis di Indonesia, baik dalam hal eksplorasi teknis, medium
            maupun percakapan kritis.
          </p>
        </div>
      </div>
    </div>
  );
}
