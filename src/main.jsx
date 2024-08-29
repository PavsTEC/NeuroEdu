import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SolicitantePage from "./pages/SolicitantePage.jsx";
import EmpresaPage from "./pages/EmpresaPage/EmpresaPage.jsx";
import EmpleosPage from "./pages/EmpleosPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<LoginPage />} />
      <Route path="/solicitante" element={<SolicitantePage />} />
      <Route path="/empresa" element={<EmpresaPage />} />
      <Route path="/empleos" element={<EmpleosPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
