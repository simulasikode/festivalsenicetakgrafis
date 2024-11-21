"use client";
import styles from "./intro.module.scss";

export default function Intro() {
  return (
    <div className={styles.main}>
      <div>
        <span>Festival Seni Cetak Grafis: Trilogia</span>
        <div className={styles.title}>Menjelang Hari Gemilang</div>
        <p className={styles.bodytext}>
          Seni cetak grafis adalah jejalin dari paradigma seni grafis dan seni
          cetak. Seni grafis sendiri adalah sebuah metode penciptaan seni dengan
          menggunakan media garis dengan seluruh elaborasi. Dalam proses
          penciptaannya menggunakan teknik cetak, baik cetak tunggal, tinggi,
          rendah maupun gabungan dari semuanya. Garis sebagai unsur utama sering
          dilupakan. Padahal, pada titik inilah seni grafis membedakan dirinya
          dengan seni lukis yang melihat garis sebagai <i>draft</i> atau karya
          sementara sebelum ditimpa oleh tekstur, blabar dan serangkaian
          perlakuan yang membuat garis tidak lagi menjadi bagian penting.
        </p>
      </div>
    </div>
  );
}
