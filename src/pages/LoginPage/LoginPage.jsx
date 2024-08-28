import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import marca from "../../assets/logo_neuroedu.png";

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-container">
          <img src={marca} alt="NeuroEdu Logo" className="marca" />
        </div>
        <h1>Bienvenido a NeuroEdu</h1>
        <p className="subtitle">
          Conectando talento humano con empresas inclusivas
        </p>
        <div className="button-container">
          <Link to="/solicitante">
            <button className="button button-primary">Solicitante</button>
          </Link>
          <Link to="/empresa">
            <button className="button button-secondary">Empresa</button>
          </Link>
        </div>
        <p className="footer-text">
          Juntos creamos oportunidades laborales inclusivas
        </p>
      </div>
    </div>
  );
}
