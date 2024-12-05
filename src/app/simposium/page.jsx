import styles from "./simposium.module.scss";

export default function Simposium() {
  return (
    <div className={styles.simposium}>
      <div className={styles.title}>
        <h1>
          Simposium Seni Cetak Grafis:
          <p>Melihat Watak Bekerja</p>
        </h1>
      </div>
      <div className={styles.text}>
        <p>
          Hasil riset Krack! Printmaking Collective sepanjang 2022-2023
          menunjukkan bahwa seni cetak grafis memiliki sejarah panjang
          perkembangannya di Indonesia. Riwayatnya memanjang sejak era kolonial
          Hindia Belanda sampai dengan hari ini, mula-mula sebagai teknik
          terapan sampai kepada medium penciptaan karya seni rupa. Bertolak dari
          pemahaman ini, maka menjadi masuk akal bahwa dinamika seni cetak
          grafis telah meninggalkan banyak jejak dalam fenomena perkembangan
          seni rupa dan lived experience masyarakat Indonesia secara umum.
        </p>
      </div>
      <div className={styles.warp}>
        <div className={styles.sub}>
          <h2>Seminar Umum - Watak Seni Cetak Grafis di Indonesia</h2>
          <p>13 Desember 2024, 09:00-12:00 WIB</p>
          <p>
            Ruang Koendjono, Lantai 4, Gedung Rektorat Kampus II, Universitas
            Sanata Dharma
          </p>
        </div>
        <div className={styles.sub}>
          <h2>Citra dan Imajinasi Identitas</h2>
          <p>13 Desember 2024, 13:00-15:00 WIB</p>
          <p>Ruang Palma, Pascasarjana Universitas Sanata Dharma</p>
        </div>
        <div className={styles.sub}>
          <h2>Yang Terlewat, Tak Jarang Dapat Tempat</h2>
          <p>13 Desember 2024, 16:00-17:35 WIB</p>
          <p>Ruang Palma, Pascasarjana Universitas Sanata Dharma</p>
        </div>
        <div className={styles.sub}>
          <h2>Politik Estetika Cetak Grafis</h2>
          <p>14 Desember 2024, 10:00-12:00 WIB</p>
          <p>Ruang Palma, Pascasarjana Universitas Sanata Dharma</p>
        </div>
        <div className={styles.sub}>
          <h2>Mencetak adalah Melawan?</h2>
          <p>14 Desember 2024, 13:00-15:00 WIB</p>
          <p> Ruang Palma, Pascasarjana Universitas Sanata Dharma</p>
        </div>
        <div className={styles.sub}>
          <h2>Mengganggu, Menubuh dan Menyetara</h2>
          <p>15 Desember 2024, 10:00 - 12:00 WIB</p>
          <p>Ruang Palma, Pascasarjana Universitas Sanata Dharma</p>
        </div>
        <div className={styles.sub}>
          <h2>Merentang Keundagian</h2>
          <p>15 Desember 2024, 13:00-15:00 WIB</p>
          <p>Ruang Palma, Pascasarjana Universitas Sanata Dharma</p>
        </div>
      </div>
    </div>
  );
}
