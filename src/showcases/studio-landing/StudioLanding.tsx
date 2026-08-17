import { Link } from "react-router-dom";
import styles from "./StudioLanding.module.css";

export default function StudioLanding() {
  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <Link to="/showcases">← DigitalForge</Link>
        <span>Atelier No. 01</span>
        <button type="button">Menu</button>
      </header>

      <main>
        <section className={styles.hero}>
          <p>Independent showcase / editorial study</p>
          <h1>Objects for an imagined tomorrow.</h1>
          <div className={styles.heroFooter}>
            <span>Buenos Aires — 2026</span>
            <p>
              A full-page route with its own palette, typography, spacing, and
              navigation. Nothing from the hub shell is mounted here.
            </p>
          </div>
        </section>

        <section className={styles.work} aria-labelledby="selected-work">
          <div className={styles.workHeader}>
            <h2 id="selected-work">Selected forms</h2>
            <span>01—03</span>
          </div>

          <div className={styles.grid}>
            <article className={`${styles.project} ${styles.projectOne}`}>
              <div className={styles.sculpture} aria-hidden="true" />
              <h3>Molten signal</h3>
              <p>Material study / 2026</p>
            </article>
            <article className={`${styles.project} ${styles.projectTwo}`}>
              <div className={styles.disc} aria-hidden="true" />
              <h3>Quiet orbit</h3>
              <p>Spatial identity / 2026</p>
            </article>
            <article className={`${styles.project} ${styles.projectThree}`}>
              <div className={styles.portal} aria-hidden="true" />
              <h3>Soft threshold</h3>
              <p>Digital environment / 2026</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

