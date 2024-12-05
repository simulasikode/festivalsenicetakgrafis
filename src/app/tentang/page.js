import Tentang from "../markdown/tentang.mdx";
import styles from "./tentang.module.scss";
export default function TentangPage() {
  return (
    <div className={styles.section}>
      <Tentang />
    </div>
  );
}
