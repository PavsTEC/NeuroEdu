import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  Briefcase,
  Users,
  Target,
  Lightbulb,
  Award,
  Pencil,
  Check,
  X,
} from "lucide-react";
import NavBarEmpresa from "@/components/NavBarEmpresa";

const EditableSection = ({ content, onSave, isEditing, setIsEditing }) => {
  const [editedContent, setEditedContent] = useState(content);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedContent(content);
    setIsEditing(false);
  };

  if (!isEditing) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      {Array.isArray(content) ? (
        content.map((item, index) => (
          <Input
            key={index}
            value={editedContent[index]}
            onChange={(e) => {
              const newContent = [...editedContent];
              newContent[index] = e.target.value;
              setEditedContent(newContent);
            }}
            className="mb-2"
          />
        ))
      ) : (
        <Textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          className="mb-2"
        />
      )}
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={handleCancel}>
          <X className="w-4 h-4 mr-2" />
          Cancelar
        </Button>
        <Button type="submit">
          <Check className="w-4 h-4 mr-2" />
          Guardar
        </Button>
      </div>
    </form>
  );
};

export default function EmpresaPage() {
  const [companyInfo, setCompanyInfo] = useState({
    name: "TechInnovate Solutions",
    tagline: "Empoderando Empresas a través de Tecnología Innovadora",
    founded: "2010",
    employees: "250+",
    location: "San Francisco, CA",
  });
  const [aboutUs, setAboutUs] = useState(
    "TechInnovate Solutions es una empresa líder en tecnología dedicada a crear soluciones de software de vanguardia para empresas de todos los tamaños. Con un enfoque en la innovación y el diseño centrado en el usuario, ayudamos a nuestros clientes a mantenerse a la vanguardia en el panorama digital."
  );
  const [mission, setMission] = useState(
    "Nuestra misión es empoderar a las empresas con soluciones tecnológicas transformadoras que impulsen el crecimiento, la eficiencia y la innovación en un mundo digital en constante evolución."
  );
  const [services, setServices] = useState([
    "Desarrollo de Software Personalizado",
    "Soluciones en la Nube",
    "Integración de IA y Aprendizaje Automático",
    "Servicios de Ciberseguridad",
    "Consultoría en Transformación Digital",
  ]);
  const [projects, setProjects] = useState([
    {
      name: "Iniciativa Ciudad Inteligente",
      description:
        "Desarrollamos un sistema de gestión urbana basado en IoT para mejorar la vida en la ciudad.",
    },
    {
      name: "Revolución FinTech",
      description:
        "Creamos una plataforma financiera basada en blockchain para transacciones seguras y transparentes.",
    },
    {
      name: "Innovación en Salud",
      description:
        "Lanzamos una aplicación de monitoreo de salud impulsada por IA para atención personalizada del paciente.",
    },
  ]);
  const [team, setTeam] = useState([
    "Dra. Emily Chen - CEO y Fundadora",
    "Michael Rodríguez - CTO",
    "Sarah Johnson - Jefa de Innovación",
    "David Lee - Arquitecto de Software Líder",
    "Lisa Wong - Directora de Relaciones con Clientes",
  ]);

  const [editingAboutUs, setEditingAboutUs] = useState(false);
  const [editingMission, setEditingMission] = useState(false);
  const [editingServices, setEditingServices] = useState(false);
  const [editingProjects, setEditingProjects] = useState(false);
  const [editingTeam, setEditingTeam] = useState(false);

  return (
    <div className="mx-auto pt-16">
      <NavBarEmpresa />
      <Card className={`max-w-4xl mx-auto`}>
        <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
          <Avatar className="w-32 h-32">
            <AvatarImage
              src="/placeholder.svg?height=128&width=128"
              alt="Logo de la empresa"
            />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-3xl">{companyInfo.name}</CardTitle>
            <CardDescription className="text-xl">
              {companyInfo.tagline}
            </CardDescription>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge>
                <Building2 className="w-4 h-4 mr-1" /> Fundada:{" "}
                {companyInfo.founded}
              </Badge>
              <Badge>
                <Users className="w-4 h-4 mr-1" /> Empleados:{" "}
                {companyInfo.employees}
              </Badge>
              <Badge>
                <Briefcase className="w-4 h-4 mr-1" /> {companyInfo.location}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Sobre Nosotros</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingAboutUs(!editingAboutUs)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>
            {!editingAboutUs && <p>{aboutUs}</p>}
            <EditableSection
              content={aboutUs}
              onSave={setAboutUs}
              isEditing={editingAboutUs}
              setIsEditing={setEditingAboutUs}
            />
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Nuestra Misión</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingMission(!editingMission)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>
            {!editingMission && (
              <div className="flex items-start">
                <Target className="w-6 h-6 mr-2 mt-1 flex-shrink-0" />
                <p>{mission}</p>
              </div>
            )}
            <EditableSection
              content={mission}
              onSave={setMission}
              isEditing={editingMission}
              setIsEditing={setEditingMission}
            />
          </section>

          <Separator />

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Nuestros Servicios</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingServices(!editingServices)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>
            {!editingServices && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <Badge key={index} className="p-2">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    {service}
                  </Badge>
                ))}
              </div>
            )}
            <EditableSection
              content={services}
              onSave={setServices}
              isEditing={editingServices}
              setIsEditing={setEditingServices}
            />
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Proyectos Destacados</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingProjects(!editingProjects)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>
            {!editingProjects &&
              projects.map((project, index) => (
                <Card key={index} className="mb-4">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      {project.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            <EditableSection
              content={projects.map(
                (project) => `${project.name}: ${project.description}`
              )}
              onSave={(newProjects) => {
                setProjects(
                  newProjects.map((project) => {
                    const [name, description] = project.split(": ");
                    return { name, description };
                  })
                );
              }}
              isEditing={editingProjects}
              setIsEditing={setEditingProjects}
            />
          </section>

          <Separator />

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Nuestro Equipo</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingTeam(!editingTeam)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>
            {!editingTeam && (
              <ul className="list-disc list-inside">
                {team.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            )}
            <EditableSection
              content={team}
              onSave={setTeam}
              isEditing={editingTeam}
              setIsEditing={setEditingTeam}
            />
          </section>

          <Separator />

          <div className="flex justify-center">
            <Button className="w-full sm:w-auto">Contáctanos</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
