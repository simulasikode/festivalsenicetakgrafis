import Image from "next/image";
import styles from "./top.module.scss";
export default function Top() {
  return (
    <div className={styles.register}>
      <span>
        <Image src={"element.svg"} alt="register" width={48} height={48} />
        <Image src={"tr_element.svg"} alt="Register" width={48} height={48} />
      </span>
    </div>
  );
}
