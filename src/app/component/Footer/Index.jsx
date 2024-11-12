"use client";
import styles from "./footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.organize}>
        <p>Organize by</p>
        <span>
          <Image src={"logo4.svg"} alt="festival logo" height={40} width={57} />
        </span>
      </div>
      <div className={styles.sponsor}>
        <div className={styles.logo}>
          <p>Supported by</p>
          <span>
            <Image
              src={"logo1.svg"}
              alt="festival logo"
              height={32}
              width={32}
            />
            <Image
              src={"logo2.svg"}
              alt="festival logo"
              height={32}
              width={219}
            />
            <Image
              src={"logo3.svg"}
              alt="festival logo"
              height={32}
              width={89}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
