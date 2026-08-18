import { Link } from "react-router-dom";
import { showcases } from "../../data/showcases";
import styles from "./HomePage.module.css";

export function HomePage() {
  const featured = showcases[0];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>UI playground / v0.1</p>
        <h1>A home for interfaces worth taking apart.</h1>
        <p className={styles.intro}>
          Build complete pages, isolate reusable pieces, and explore motion or
          WebGL without turning every idea into a separate app.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryAction} to="/showcases">
            Browse showcases
          </Link>
          <Link className={styles.secondaryAction} to="/components">
            Open component catalog
          </Link>
        </div>
      </section>

      <section className={styles.collections} aria-labelledby="collections-title">
        <div className={styles.sectionHeading}>
          <p>Two collections</p>
          <h2 id="collections-title">One workshop, clear boundaries.</h2>
        </div>

        <div className={styles.collectionGrid}>
          <Link className={styles.collectionCard} to="/showcases">
            <span className={styles.cardIndex}>01</span>
            <div>
              <h3>Showcases</h3>
              <p>Complete pages with independent layouts and visual systems.</p>
            </div>
            <span aria-hidden="true">↗</span>
          </Link>

          <Link className={styles.collectionCard} to="/components">
            <span className={styles.cardIndex}>02</span>
            <div>
              <h3>Components</h3>
              <p>Navigation, layout, feedback, overlays, and controls.</p>
            </div>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.featured} aria-labelledby="featured-title">
        <div className={styles.featureVisual} aria-hidden="true">
          <span className={styles.orbit} />
          <span className={styles.core} />
        </div>
        <div className={styles.featureCopy}>
          <p className={styles.eyebrow}>Featured showcase</p>
          <h2 id="featured-title">{featured.title}</h2>
          <p>{featured.description}</p>
          <Link to={featured.route}>Open the page →</Link>
        </div>
      </section>
    </div>
  );
}

