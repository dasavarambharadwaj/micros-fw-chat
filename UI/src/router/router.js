import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home/Home.jsx";
import Settings from "@/pages/settings/Settings";
import ErrorPage from "../pages/error-page/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    ErrorBoundary: ErrorPage,
  },
  {
    path: "/settings",
    Component: Settings,
    ErrorBoundary: ErrorPage,
  },
]);
export default router;
