"use client";
import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";
import CarbonLogoInstagram from "../CarbonLogoInstagram";
import Break from "../break";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Break />
      <div className={styles.container}>
        <div className={styles.list}>
          <Link href="/code-of-conduct">Code of Conduct</Link>
          <br />
        </div>
        <div className={styles.credit}>
          <div className={styles.social}>
            <Link
              href="https://instagram.com/festivalsenicetakgrafis"
              target="_blank"
            >
              <CarbonLogoInstagram width={32} height={32} />
            </Link>
            <br />
            <br />
            <p>© All rights reserved 2024. Krack! studio</p>
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
