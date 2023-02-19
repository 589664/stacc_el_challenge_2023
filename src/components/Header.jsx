import Link from "next/link";
import styles from "@/styles/Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/stacc_logo.png" alt="Logo" width={60} height={60} />
        </div>
        <h1 className={styles.title}>Sparstrøm</h1>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      {/* <main id="main-content">
        <Component {...pageProps} />
      </main> */}
    </div>
  );
}
