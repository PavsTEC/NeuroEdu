import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Book, Code, Coffee, Zap } from "lucide-react";
import NavBarSolicitante from "@/components/NavBarSolicitante";

const courses = [
  {
    id: 1,
    title: "Lógica Programación: Aprende Programar en Cualquier Lenguaje",
    description:
      "Un curso muy básico para aprender a programar en cualquier lenguaje: Java, C++, JavaScript, Python, SQL, HTML, Swift etc.",
    icon: Code,
    rating: 4.5,
    reviews: 28495,
    duration: "6.5 horas en total",
    level: "Todos los niveles",
    price: 11.99,
    category: "Programación",
  },
  {
    id: 2,
    title: "Aprende a programar con Java",
    description:
      "Acepta el reto y aprende en 2 horas las bases de la programación informática y de la Programación Orientada a Objetos.",
    icon: Coffee,
    rating: 4.6,
    reviews: 891,
    duration: "2 horas en total",
    level: "Principiante",
    price: 14.99,
    category: "Java",
  },
  {
    id: 3,
    title: "Programación para Principiantes: Python Primeros Pasos",
    description:
      "Aprende los fundamentos de programación necesarios para programar en Python.",
    icon: Book,
    rating: 4.7,
    reviews: 1305,
    duration: "3.5 horas en total",
    level: "Principiante",
    price: 12.99,
    category: "Python",
  },
  {
    id: 4,
    title: "Cómo Programar para Emprendedores - JavaScript",
    description:
      "Aprende JavaScript desde cero y lo necesario para crear tu propia Startup.",
    icon: Zap,
    rating: 4.8,
    reviews: 2724,
    duration: "8.5 horas en total",
    level: "Principiante",
    price: 16.99,
    category: "JavaScript",
  },
];

export default function AprendePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" || course.category === selectedCategory)
  );

  return (
    <div className="container mx-auto py-28">
      <NavBarSolicitante />
      <h1 className="text-3xl font-bold mb-6">
        Cursos adaptados a personas neurodivergentes
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input
          placeholder="Buscar cursos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorías</SelectItem>
            <SelectItem value="Programación">Programación</SelectItem>
            <SelectItem value="Java">Java</SelectItem>
            <SelectItem value="Python">Python</SelectItem>
            <SelectItem value="JavaScript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
        <Button
          onClick={() => {
            setSearchTerm("");
            setSelectedCategory("all");
          }}
        >
          Borrar filtros
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <CardHeader>
              <div className="w-full h-40 flex items-center justify-center bg-primary/10 rounded-t-lg">
                <course.icon className="w-20 h-20 text-primary" />
              </div>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="font-bold mr-1">{course.rating}</span>
                <span className="text-muted-foreground">
                  ({course.reviews.toLocaleString()})
                </span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 mr-1" />
                <span>{course.duration}</span>
              </div>
              <Badge>{course.level}</Badge>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="font-bold text-lg">
                ${course.price.toFixed(2)}
              </span>
              <Button>Añadir al carrito</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
