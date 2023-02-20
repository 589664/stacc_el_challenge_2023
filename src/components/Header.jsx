import Link from "next/link";
import styles from "@/styles/Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/stacc_logo.png" alt="Logo" width={60} height={60} />
        </div>
        <h1 className={styles.title}>Sparstrøm</h1>
        <nav className={styles.nav}>
          <a href="#">Hjem</a>
          <a href="#">Om</a>
          <a href="#">Kontakt</a>
        </nav>
      </header>
  );
}
