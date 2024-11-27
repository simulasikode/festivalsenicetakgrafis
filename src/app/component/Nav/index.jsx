import Image from "next/image";
import styles from "./nav.module.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={"Logo.svg"} alt="Logo Festival" width={48} height={48} />
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
              <Link href="program">Program</Link>
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
            width={48}
            height={48}
          />
        </Link>
      </div>
    </div>
  );
}
