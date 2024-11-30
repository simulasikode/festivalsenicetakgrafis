import Link from "next/link";
import styles from "./gambul.module.scss";
import Image from "next/image";

export default function Gambul() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Ayo Jajan Umbul</h1>
        <span>
          Informasi Pre-Order <mark>16-30 November 2024</mark>
        </span>
      </div>
      <div className={styles.gambul}>
        <div className={styles.seniman}>
          <Image
            src={"_seri_seniman_mid.png"}
            alt="seri seniman"
            width={400}
            height={257}
          />
        </div>

        <div className={styles.kurator}>
          <Image
            src={"_seri_kurator_mid.png"}
            alt="seri kurator"
            width={400}
            height={257}
          />
        </div>
        <div className={styles.pekerja}>
          <Image
            src={"_seri_pekerja_mid.png"}
            alt="seri pekerja seni"
            width={400}
            height={257}
          />
        </div>

        <div className={styles.manager}>
          <Image
            src={"_seri_manager_mid.png"}
            alt="seri manager"
            width={400}
            height={257}
          />
        </div>
        <div className={styles.galeri}>
          <Image
            src={"_seri_galeri_mid.png"}
            alt="seri galeri"
            width={400}
            height={257}
          />
        </div>
        <div className={styles.kolektif}>
          <Image
            src={"_seri_kolektif_mid.png"}
            alt="seri kolektif"
            width={400}
            height={257}
          />
        </div>
      </div>
      <div className={styles.order}>
        <Link href="http://bit.ly/ayojajangambul" target="_blank">
          Pra-Pesan
        </Link>
        <Image src="LightArrow.svg" alt="Next" width={32} height={32} />{" "}
      </div>
    </div>
  );
}
