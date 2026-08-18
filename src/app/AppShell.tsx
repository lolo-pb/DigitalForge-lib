import { Outlet } from "react-router-dom";
import { Footer } from "../components/layout/footer/Footer";
import { TopNav } from "../components/navigation/top-nav/TopNav";
import styles from "./AppShell.module.css";

const links = [
  { label: "Home", to: "/" },
  { label: "Showcases", to: "/showcases" },
  { label: "Components", to: "/components" },
];

export function AppShell() {
  return (
    <div className={styles.shell}>
      <TopNav brand="DigitalForge" links={links} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

