import Image from "next/image";
import styles from "./nav.module.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={"trilogia.svg"}
              alt="Logo Festival"
              width={42}
              height={42}
            />
          </Link>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <button>
                <Link href="festival">Festival</Link>
              </button>
            </li>
            <li>
              <button type="button">
                <Link href="tim">Tim</Link>
              </button>
            </li>

            <li>
              <button type="button">
                <Link href="program">Program</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
