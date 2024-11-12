import Image from "next/image";
import styles from "./nav.module.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <div>
          <Link href="/">Festival Seni Cetak Grafis:</Link>
          <p>Trilogia</p>
        </div>
        <div>
          <Link
            href="https://instagram.com/festivalsenicetakgrafis"
            target="_blank"
          >
            <Image
              src={"instagram.svg"}
              alt="logo instagram"
              width={36}
              height={36}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
