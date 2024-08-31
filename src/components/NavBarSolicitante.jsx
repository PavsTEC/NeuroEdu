import React, { useState } from "react";
import logo from "../assets/letra_n.png";
import { Link } from "react-router-dom";
import { User, Briefcase, BookOpen, Menu, X } from "lucide-react";

export default function NavBarSolicitante() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: "/solicitante", icon: User, text: "Perfil" },
    { to: "/empleos", icon: Briefcase, text: "Empleos" },
    { to: "/aprende", icon: BookOpen, text: "Aprende" },
  ];

  return (
    <nav className="bg-gray-50 shadow-md py-4 px-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="block">
          <img src={logo} alt="NeuroEdu Logo" className="h-[45px] w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="text-teal-600 font-medium transition-colors duration-300 hover:text-teal-700 hover:underline flex items-center"
              >
                <item.icon size={18} className="mr-1" />
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-teal-600 hover:text-teal-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-50 shadow-md">
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block px-4 py-2 text-teal-600 font-medium hover:bg-gray-100 flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={18} className="mr-2" />
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
