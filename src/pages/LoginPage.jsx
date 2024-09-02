import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "../assets/neuroedu_sin_limites.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isPersonMenuOpen, setIsPersonMenuOpen] = useState(false);

  const handleEmpresaClick = () => {
    navigate("/empresa");
  };

  const handlePersonaClick = () => {
    setIsPersonMenuOpen(true);
  };

  const handleNeurodivergentClick = () => {
    navigate("/solicitante");
  };

  const handleNeurotypicalClick = () => {
    navigate("/certificate");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <img src={logo} alt="NeuroEdu Logo" className=" h-32 mb-8" />

        <h1 className="text-4xl font-bold text-center mb-4">
          Bienvenido a NeuroEdu
        </h1>

        <p className="text-xl text-center mb-12">
          Conectando talento humano con empresas inclusivas
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <DropdownMenu
            open={isPersonMenuOpen}
            onOpenChange={setIsPersonMenuOpen}
          >
            <DropdownMenuTrigger asChild>
              <Button size="lg" onClick={handlePersonaClick}>
                Persona
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleNeurodivergentClick}>
                Persona Neurodivergente
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleNeurotypicalClick}>
                Persona Neurotípica
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button size="lg" onClick={handleEmpresaClick}>
            Empresa
          </Button>
        </div>
      </main>

      <footer className="py-4 text-center">
        <p className="text-sm font-medium">
          Juntos creamos oportunidades laborales inclusivas
        </p>
        <Link
          to="/sobre-nosotros"
          className="text-sm font-medium underline hover:text-primary transition-colors duration-300 mt-2 inline-block"
        >
          Sobre Nosotros
        </Link>
      </footer>
    </div>
  );
}
