import Pameran from "../markdown/pengantar.mdx";
import styles from "./pengantar.module.scss";

export default function PengantarPage() {
  return (
    <div className={styles.section}>
      <Pameran />
    </div>
  );
}
