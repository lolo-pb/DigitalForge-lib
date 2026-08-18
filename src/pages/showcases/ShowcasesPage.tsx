import { Link } from "react-router-dom";
import { showcases } from "../../data/showcases";
import styles from "./ShowcasesPage.module.css";

export function ShowcasesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p>Full-page collection</p>
        <h1>Showcases</h1>
        <span>
          Each route owns its layout and styles, so a new idea can look nothing
          like the hub or its neighbors.
        </span>
      </header>

      <div className={styles.grid}>
        {showcases.map((showcase, index) => (
          <Link className={styles.card} key={showcase.route} to={showcase.route}>
            <div className={styles.preview}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.previewShape} aria-hidden="true" />
            </div>
            <div className={styles.cardCopy}>
              <h2>{showcase.title}</h2>
              <p>{showcase.description}</p>
              <ul aria-label="Tags">
                {showcase.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

