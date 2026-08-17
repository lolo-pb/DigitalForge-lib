import { NavLink } from "react-router-dom";
import styles from "./TopNav.module.css";

type NavigationLink = {
  label: string;
  to: string;
};

type TopNavProps = {
  brand: string;
  links: NavigationLink[];
};

export function TopNav({ brand, links }: TopNavProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary navigation">
        <NavLink className={styles.brand} to="/">
          <span className={styles.mark} aria-hidden="true" />
          {brand}
        </NavLink>

        <div className={styles.links}>
          {links.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              end={link.to === "/"}
              key={link.to}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

