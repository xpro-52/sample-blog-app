import styles from "@/styles/components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          &copy; {new Date().getFullYear()} My Blog App. All rights reserved.
        </p>
      </div>
      <div></div>
    </footer>
  );
}
