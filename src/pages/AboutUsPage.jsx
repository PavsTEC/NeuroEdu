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
    name: "Santiago Jiménez",
    role: "Ingeniero químico y biotecnólogo",
    description:
      "Apasionado por las ciencias, las matemáticas y su enseñanza. Constantemente buscando formas de mejorar mis habilidades y conocimientos en mi campo de estudio. Promotor del bienestar estudiantil.",
    image: "/santiago.jpeg",
    initials: "SJ",
  },
  {
    name: "Pablo Venegas",
    role: "Desarrollador de Software",
    description:
      "Entusiasta de crear soluciones que mejoren la vida de las personas, transformando lo complicado en algo fácil.",
    image: "/pablo.jpeg",
    initials: "PV",
  },
  {
    name: "Dayana Araya",
    role: "Adminisradora de Empresas",
    description:
      "Dayana es una estudiante interesada en apreder y conocer sobre el mundo empresarial, economía global y las problemáticas sociales.",
    image: "/dayana.jpeg",
    initials: "DA",
  },
  {
    name: "Gerald Guillén",
    role: "Administrador de Empresas",
    description: "Gerald es un talentoso estudiante aficionado al café.",
    image: "/placeholder.svg?height=200&width=200",
    initials: "GG",
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
        combina experiencia en tecnología, ciencia y gestión de proyectos para
        ofrecer soluciones innovadoras que fomenten la inclusión laboral.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="flex flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center text-center">
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
