import Link from "next/link";
import styles from "@/styles/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/about">
              About
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
