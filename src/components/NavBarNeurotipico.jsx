import React from "react";
import logo from "../assets/letra_n.png";
import { Link } from "react-router-dom";
import { Home } from "lucide-react"; // Import the Home icon

export default function NavBarSolicitante() {
  return (
    <nav className="bg-gray-50 shadow-md py-4 px-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="block">
          <img src={logo} alt="NeuroEdu Logo" className="h-[45px] w-auto" />
        </Link>
        <Link
          to="/"
          className="flex items-center text-primary hover:text-primary/80 transition-colors duration-300"
        >
          <Home className="w-5 h-5 mr-2" />
          <span className="font-medium">Home</span>
        </Link>
      </div>
    </nav>
  );
}
