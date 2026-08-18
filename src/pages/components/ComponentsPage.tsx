import { useState } from "react";
import { Button } from "../../components/controls/button/Button";
import { Spinner } from "../../components/feedback/spinner/Spinner";
import { Footer } from "../../components/layout/footer/Footer";
import { TopNav } from "../../components/navigation/top-nav/TopNav";
import { Modal } from "../../components/overlays/modal/Modal";
import styles from "./ComponentsPage.module.css";

const previewLinks = [
  { label: "Overview", to: "/components" },
  { label: "Showcases", to: "/showcases" },
];

export function ComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p>Reusable collection</p>
        <h1>Components</h1>
        <span>
          Pieces are grouped by what they do instead of atomic-design labels.
          Each component keeps its code and styles in one folder.
        </span>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>Navigation</span>
          <code>components/navigation</code>
        </div>
        <div className={styles.previewCard}>
          <TopNav brand="Preview Nav" links={previewLinks} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>Controls</span>
          <code>components/controls</code>
        </div>
        <div className={`${styles.previewCard} ${styles.inlinePreview}`}>
          <Button>Primary action</Button>
          <Button variant="secondary">Secondary action</Button>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>Feedback</span>
          <code>components/feedback</code>
        </div>
        <div className={`${styles.previewCard} ${styles.inlinePreview}`}>
          <Spinner label="Preparing preview" />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>Overlays</span>
          <code>components/overlays</code>
        </div>
        <div className={`${styles.previewCard} ${styles.inlinePreview}`}>
          <Button onClick={() => setModalOpen(true)}>Open modal</Button>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>Layout</span>
          <code>components/layout</code>
        </div>
        <div className={styles.previewCard}>
          <Footer />
        </div>
      </section>

      <Modal
        onClose={() => setModalOpen(false)}
        open={modalOpen}
        title="A component with boundaries"
      >
        <p>
          The overlay lives under its own type folder and can evolve without
          changing any showcase page.
        </p>
      </Modal>
    </div>
  );
}

