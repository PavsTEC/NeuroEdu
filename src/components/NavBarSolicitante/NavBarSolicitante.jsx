import React from "react";
import "./NavBarSolicitante.css";
import logo from "../../assets/letra_n.png";
import { Link } from "react-router-dom";
import { User, Briefcase, BookOpen } from "lucide-react";

export default function NavBarSolicitante() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/solicitante" className="logo-link">
          <img src={logo} alt="NeuroEdu Logo" className="logo" />
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/solicitante">
              <User size={18} />
              <span>Perfil</span>
            </Link>
          </li>
          <li>
            <Link to="/empleos">
              <Briefcase size={18} />
              <span>Empleos</span>
            </Link>
          </li>
          <li>
            <Link to="/aprende">
              <BookOpen size={18} />
              <span>Aprende</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
