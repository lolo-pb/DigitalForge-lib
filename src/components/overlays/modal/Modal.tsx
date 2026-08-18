import { useEffect, type ReactNode } from "react";
import { Button } from "../../controls/button/Button";
import styles from "./Modal.module.css";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  title: string;
};

export function Modal({ children, onClose, open, title }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <section
        aria-labelledby="demo-modal-title"
        aria-modal="true"
        className={styles.modal}
        role="dialog"
      >
        <div>
          <p className={styles.eyebrow}>Overlay component</p>
          <h2 id="demo-modal-title">{title}</h2>
        </div>
        <div className={styles.content}>{children}</div>
        <Button onClick={onClose}>Close modal</Button>
      </section>
    </div>
  );
}

