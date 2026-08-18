import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "../components/feedback/spinner/Spinner";
import { ComponentsPage } from "../pages/components/ComponentsPage";
import { HomePage } from "../pages/home/HomePage";
import { NotFoundPage } from "../pages/not-found/NotFoundPage";
import { ShowcasesPage } from "../pages/showcases/ShowcasesPage";
import { AppShell } from "./AppShell";
import styles from "./App.module.css";

const StudioLanding = lazy(
  () => import("../showcases/studio-landing/StudioLanding"),
);

const AthletesUsa = lazy(
  () => import("../showcases/athletes-usa/AthletesUsa"),
);

const AthletesDetail = lazy(
  () => import("../showcases/athletes-usa/AthletesDetail"),
);

export function App() {
  return (
    <Suspense
      fallback={
        <div className={styles.loadingPage}>
          <Spinner label="Loading showcase" />
        </div>
      }
    >
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="showcases" element={<ShowcasesPage />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="showcases/studio-landing" element={<StudioLanding />} />
        <Route path="showcases/athletes-usa" element={<AthletesUsa />} />
        <Route
          path="showcases/athletes-usa/:detail"
          element={<AthletesDetail />}
        />
      </Routes>
    </Suspense>
  );
}

