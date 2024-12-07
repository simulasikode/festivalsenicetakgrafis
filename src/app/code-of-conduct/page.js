import Conduct from "../markdown/code-of-conduct.mdx";
import styles from "./conduct.module.scss";

export default function ConductPage() {
  return (
    <div className={styles.section}>
      <Conduct />
    </div>
  );
}
