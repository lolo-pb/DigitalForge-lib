import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  return (
    <section className={styles.page}>
      <p>404</p>
      <h1>This page has not been forged yet.</h1>
      <Link to="/">Return to the hub</Link>
    </section>
  );
}

