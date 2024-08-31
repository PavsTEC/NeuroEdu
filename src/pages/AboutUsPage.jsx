import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavBarNeurotipico from "@/components/NavBarNeurotipico";

const teamMembers = [
  {
    name: "Ana García",
    role: "Desarrolladora Full Stack",
    description:
      "Ana es una apasionada desarrolladora con experiencia en React y Node.js. Su enfoque en la accesibilidad web la llevó a unirse a NeuroEdu.",
    image: "/placeholder.svg?height=200&width=200",
    initials: "AG",
  },
  {
    name: "Carlos Rodríguez",
    role: "Diseñador UX/UI",
    description:
      "Carlos combina su formación en psicología con sus habilidades de diseño para crear interfaces intuitivas y accesibles para usuarios neurodivergentes.",
    image: "/placeholder.svg?height=200&width=200",
    initials: "CR",
  },
  {
    name: "Laura Martínez",
    role: "Especialista en Neurodiversidad",
    description:
      "Con un doctorado en neurociencias, Laura aporta un profundo conocimiento sobre las necesidades de las personas neurodivergentes en el ámbito laboral.",
    image: "/placeholder.svg?height=200&width=200",
    initials: "LM",
  },
  {
    name: "Miguel Sánchez",
    role: "Gerente de Proyectos",
    description:
      "Miguel tiene una amplia experiencia en gestión de proyectos tecnológicos y un fuerte compromiso con la inclusión en el lugar de trabajo.",
    image: "/placeholder.svg?height=200&width=200",
    initials: "MS",
  },
];

export default function AboutUsPage() {
  return (
    <div className="container mx-auto p-4 mt-20">
      <NavBarNeurotipico />
      <h1 className="text-3xl font-bold mb-6 text-center">Sobre Nosotros</h1>

      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        En NeuroEdu, nos dedicamos a crear puentes entre el talento
        neurodivergente y las empresas inclusivas. Nuestro equipo diverso
        combina experiencia en tecnología, diseño, neurociencias y gestión de
        proyectos para ofrecer soluciones innovadoras que fomenten la inclusión
        laboral.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="flex flex-col items-center text-center">
            <CardHeader>
              <Avatar className="w-32 h-32 mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
