"use client";
import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.credit}>
          <div className={styles.social}>
            <Link
              href="https://instagram.com/festivalsenicetakgrafis"
              target="_blank"
            >
              <Image
                src={"Instagram.svg"}
                alt="instagram"
                width={32}
                height={32}
              />
            </Link>
            <br />
            <p>© 2024. Krack! studio</p>
          </div>
          <div className={styles.organize}>
            <p>Organize by</p>
            <span className={styles.krack}>
              <Link href="https://krackstudio.com" target="_blank">
                <Image src={"logo4.svg"} alt="Krack!" width={57} height={40} />
              </Link>
            </span>
          </div>
          <div className={styles.support}>
            <p>Support by</p>
            <span className={styles.logo}>
              <Image src={"logo1.svg"} alt="Krack!" width={32} height={32} />
              <Image src={"logo2.svg"} alt="Krack!" width={219} height={32} />
              <Image src={"logo3.svg"} alt="Krack!" width={98} height={32} />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.register}>
        <Image src={"bt-left.svg"} alt="register" width={48} height={48} />
        <Image src={"bt-right.svg"} alt="Register" width={48} height={48} />
      </div>
    </div>
  );
}
