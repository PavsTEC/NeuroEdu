import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import NavBarSolicitante from "@/components/NavBarSolicitante";

export default function EmpleosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const jobs = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      description:
        "Buscamos un desarrollador frontend con experiencia en React y TypeScript.",
      requirements: [
        "Experiencia en React",
        "Conocimientos de TypeScript",
        "Habilidades de diseño web",
      ],
      category: "Desarrollo",
      location: "Madrid",
    },
    {
      id: 2,
      title: "Diseñador UX/UI",
      description:
        "Necesitamos un diseñador UX/UI para mejorar la experiencia de usuario de nuestra aplicación.",
      requirements: [
        "Experiencia en diseño de interfaces",
        "Conocimientos de herramientas de diseño",
        "Habilidades de investigación de usuario",
      ],
      category: "Diseño",
      location: "Barcelona",
    },
    {
      id: 3,
      title: "Analista de Datos",
      description:
        "Buscamos un analista de datos para extraer insights de nuestros datos y mejorar la toma de decisiones.",
      requirements: [
        "Experiencia en análisis de datos",
        "Conocimientos de SQL y Python",
        "Habilidades de visualización de datos",
      ],
      category: "Datos",
      location: "Valencia",
    },
    {
      id: 4,
      title: "Gerente de Proyecto",
      description:
        "Necesitamos un gerente de proyecto para liderar el desarrollo de nuestros nuevos productos.",
      requirements: [
        "Experiencia en gestión de proyectos",
        "Habilidades de liderazgo",
        "Conocimientos de metodologías ágiles",
      ],
      category: "Gestión",
      location: "Sevilla",
    },
    {
      id: 5,
      title: "Especialista en Marketing Digital",
      description:
        "Buscamos un especialista en marketing digital para impulsar la presencia online de nuestra marca.",
      requirements: [
        "Experiencia en marketing digital",
        "Conocimientos de SEO y SEM",
        "Habilidades de análisis de datos",
      ],
      category: "Marketing",
      location: "Bilbao",
    },
  ];
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(job.category);
      const matchesLocation =
        selectedLocations.length === 0 ||
        selectedLocations.includes(job.location);
      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchTerm, selectedCategories, selectedLocations]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleCategoryFilter = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const handleLocationFilter = (location) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter((l) => l !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };
  const uniqueCategories = [...new Set(jobs.map((job) => job.category))];
  const uniqueLocations = [...new Set(jobs.map((job) => job.location))];
  return (
    <div className="container mx-auto py-8">
      <NavBarSolicitante />
      <h1 className="text-3xl font-bold mb-6">Ofertas de Empleo</h1>
      <div className="flex items-center mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5" />
          </div>
          <Input
            type="text"
            placeholder="Buscar ofertas..."
            className="pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="ml-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                <FilterIcon className="h-5 w-5 mr-2" />
                Filtros
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-4">
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Categorías</h3>
                <div className="grid grid-cols-2 gap-2">
                  {uniqueCategories.map((category) => (
                    <Label key={category} className="flex items-center">
                      <Checkbox
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryFilter(category)}
                      />
                      <span className="ml-2">{category}</span>
                    </Label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Ubicaciones</h3>
                <div className="grid grid-cols-2 gap-2">
                  {uniqueLocations.map((location) => (
                    <Label key={location} className="flex items-center">
                      <Checkbox
                        checked={selectedLocations.includes(location)}
                        onCheckedChange={() => handleLocationFilter(location)}
                      />
                      <span className="ml-2">{location}</span>
                    </Label>
                  ))}
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className=" mb-4">{job.description}</p>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Requisitos:</h3>
              <ul className="list-disc pl-4">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-gray-500">
                <BriefcaseIcon className="h-5 w-5 inline-block mr-1" />
                {job.category}
                <span className="mx-2">|</span>
                <MapPinIcon className="h-5 w-5 inline-block mr-1" />
                {job.location}
              </div>
              <Button className="inline-flex items-center justify-center h-10 px-6 rounded-md">
                Aplicar
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
