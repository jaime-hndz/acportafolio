import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PortfolioScreen } from "../screens/PortfolioScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { ProjectsScreen } from "../screens/ProjectsScreen";

export const AppRouter = () => {
  return (
    <>
      <Router
        basename={import.meta.env.DEV ? "/" : "/jportfolio/"}
        future={{
          v7_fetcherPersist: true,
          v7_normalizeFormMethod: true,
          v7_partialHydration: true,
          v7_relativeSplatPath: true,
          v7_skipActionErrorRevalidation: true,
          v7_startTransition: true,
        }}
      >
        <Routes>
          <Route element={<PortfolioScreen />} path="/" />
          <Route element={<AboutScreen />} path="/about" />
          <Route element={<ProjectsScreen />} path="/projects" />
        </Routes>
      </Router>
    </>
  );
};
