import styles from "./program.module.scss";
import Link from "next/link";

export default function ProgramPage() {
  return (
    <div className={styles.program}>
      <h1>Program Festival</h1>
      <div className={styles.table}>
        <p>
          <Link href="/pameran">Pameran</Link>
        </p>
        <p>
          <Link href="/simposium">Simposium</Link>
        </p>
        <p>
          <Link href="/kolaborasi">Kolaborasi</Link>
        </p>
        <p>
          <Link href="/publik">Publik</Link>
        </p>
      </div>
    </div>
  );
}
