import Image from "next/image";
import styles from "./nav.module.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={"Logo.svg"} alt="Logo Festival" width={32} height={32} />
        </Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <button>
              <Link href="tentang">Tentang</Link>
            </button>
          </li>
          <li>
            <button type="button">
              <Link href="/">Program</Link>
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.instagram}>
        <Link
          href="https://instagram.com/festivalsenicetakgrafis"
          target="_blank"
        >
          <Image
            src={"Instagram.svg"}
            alt="logo instagram"
            width={34}
            height={34}
          />
        </Link>
      </div>
    </div>
  );
}
