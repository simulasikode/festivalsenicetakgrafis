import Image from "next/image";
import styles from "./festival.module.scss";

export default function FestivalPage() {
  return (
    <div className={styles.festival}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>
            Tentang <span>Festival Seni Cetak Grafis: Trilogia</span>
          </h1>
        </div>
      </div>
      <div className={styles.bodytext}>
        <div>
          <p>
            <b>Festival Seni Cetak Grafis “Trilogia”</b> merupakan upaya Krack
            sebagai kelompok pegiat seni cetak grafis untuk merayakan praktik
            dan pengetahuan yang senantiasa berkembang luas dan terepresentasi
            dalam seni cetak grafis. Watak seni cetak grafis yang distributif,
            repetitif, dan reproduktif akan kami jadikan pintu masuk untuk
            membicarakan berbagai topik dalam dinamika sosial budaya masyarakat.
          </p>
          <p>
            Seni cetak grafis memiliki sejarah panjang dan kerap digunakan
            sebagai medium penyampai pesan sekaligus alat propaganda isu
            sosial-politik. Medium cetak juga hadir dalam keseharian masyarakat
            hari ini. Ia bisa menjadi gambar kaos yang mengkritisi rezim, hadir
            dalam uang sebagai nilai tukar sehari-hari, hingga muncul sebagai
            poster, bendera, buku dan lain sebagainya. Membicarakan praktik dan
            perkembangan seni cetak grafis sama halnya dengan merefleksikan
            budaya masyarakat. Dari situlah kerja produksi pengetahun seni cetak
            grafis menemukan urgensinya
          </p>
        </div>
      </div>
      <div className={styles.btn}>
        <p>Selanjutnya</p>
        <span>
          <Image src="LightArrow.svg" alt="arrow" width={28} height={28} />
        </span>
      </div>
    </div>
  );
}
