import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import LoginPage from "./pages/LoginPage.jsx";
import SolicitantePage from "./pages/SolicitantePage.jsx";
import EmpresaPage from "./pages/EmpresaPage.jsx";
import EmpleosPage from "./pages/EmpleosPage.jsx";
import AprendePage from "./pages/AprendePage.jsx";
import OfrecerEmpleoPage from "./pages/OfrecerEmpleoPage.jsx";
import CertificadosPage from "./pages/CertificadosPage.jsx";
import CertificatePage from "./pages/CertificatePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<LoginPage />} />
      <Route path="/solicitante" element={<SolicitantePage />} />
      <Route path="/empleos" element={<EmpleosPage />} />
      <Route path="/aprende" element={<AprendePage />} />
      <Route path="/empresa" element={<EmpresaPage />} />
      <Route path="/ofrecer-empleo" element={<OfrecerEmpleoPage />} />
      <Route path="/certificados" element={<CertificadosPage />} />
      <Route path="/certificate" element={<CertificatePage />} />
      <Route path="/sobre-nosotros" element={<AboutUsPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
