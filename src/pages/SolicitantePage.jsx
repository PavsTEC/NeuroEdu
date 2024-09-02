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
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Users,
  Pencil,
  Check,
  X,
} from "lucide-react";
import NavBarSolicitante from "@/components/NavBarSolicitante";

const EditableSection = ({
  title,
  content,
  onSave,
  isEditing,
  setIsEditing,
}) => {
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

export default function Component() {
  const [aboutMe, setAboutMe] = useState(
    "Soy un desarrollador de software con 5 años de experiencia. Me apasiona crear aplicaciones accesibles y fáciles de usar. Como individuo en el espectro autista, aporto una perspectiva única a la resolución de problemas y atención al detalle."
  );
  const [communicationPreferences, setCommunicationPreferences] = useState([
    "Prefiero comunicación escrita sobre llamadas telefónicas",
    "Por favor sé directo y específico con las instrucciones",
    "Podría necesitar tiempo extra para resolver situaciones sociales complejas",
  ]);
  const [skills, setSkills] = useState([
    "JavaScript",
    "React",
    "Node.js",
    "Accesibilidad",
    "Resolución de problemas",
    "Análisis de datos",
  ]);
  const [experiences, setExperiences] = useState([
    {
      title: "Desarrollador Senior en TechCorp",
      period: "2018 - Presente",
      description:
        "Liderando iniciativas de accesibilidad y desarrollando aplicaciones web robustas.",
    },
    {
      title: "Desarrollador Junior en StartUp Inc",
      period: "2016 - 2018",
      description:
        "Trabajé en varios proyectos frontend y mejoré mis habilidades de codificación.",
    },
  ]);
  const [education, setEducation] = useState({
    degree: "Licenciatura en Ciencias de la Computación",
    school: "Universidad de Tecnología",
    year: "2016",
  });
  const [interests, setInterests] = useState([
    "Leer ciencia ficción",
    "Grupos de apoyo para autismo",
    "Encuentros tecnológicos",
  ]);

  const [editingAboutMe, setEditingAboutMe] = useState(false);
  const [editingCommunicationPreferences, setEditingCommunicationPreferences] =
    useState(false);
  const [editingSkills, setEditingSkills] = useState(false);
  const [editingExperiences, setEditingExperiences] = useState(false);
  const [editingEducation, setEditingEducation] = useState(false);
  const [editingInterests, setEditingInterests] = useState(false);

  return (
    <div className="mx-auto pt-16">
      <NavBarSolicitante />
      <Card className={`max-w-4xl mx-auto`}>
        <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
          <Avatar className="w-32 h-32">
            <AvatarImage
              src="/placeholder.svg?height=128&width=128"
              alt="Foto de perfil"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-3xl">Jane Doe</CardTitle>
            <CardDescription className="text-xl">
              Desarrolladora de Software | Defensora del Autismo
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Sobre mí</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingAboutMe(!editingAboutMe)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>
            {!editingAboutMe && <p>{aboutMe}</p>}
            <EditableSection
              title="Sobre mí"
              content={aboutMe}
              onSave={setAboutMe}
              isEditing={editingAboutMe}
              setIsEditing={setEditingAboutMe}
            />
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">
                Preferencias de comunicación
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setEditingCommunicationPreferences(
                    !editingCommunicationPreferences
                  )
                }
              >
                <Pencil className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>
            {!editingCommunicationPreferences && (
              <ul className="list-disc list-inside">
                {communicationPreferences.map((pref, index) => (
                  <li key={index}>{pref}</li>
                ))}
              </ul>
            )}
            <EditableSection
              title="Preferencias de comunicación"
              content={communicationPreferences}
              onSave={setCommunicationPreferences}
              isEditing={editingCommunicationPreferences}
              setIsEditing={setEditingCommunicationPreferences}
            />
          </section>

          <Separator />

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Habilidades</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingSkills(!editingSkills)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>
            {!editingSkills && (
              <div className="flex flex-wrap gap-2 mb-2">
                {skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            )}
            <EditableSection
              title="Habilidades"
              content={skills}
              onSave={setSkills}
              isEditing={editingSkills}
              setIsEditing={setEditingSkills}
            />
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Experiencia</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingExperiences(!editingExperiences)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>
            {!editingExperiences &&
              experiences.map((exp, index) => (
                <Card key={index} className={`mb-4`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      {exp.title}
                    </CardTitle>
                    <CardDescription>{exp.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            <EditableSection
              title="Experiencia"
              content={experiences.map(
                (exp) => `${exp.title} (${exp.period}): ${exp.description}`
              )}
              onSave={(newExperiences) => {
                setExperiences(
                  newExperiences.map((exp) => {
                    const [title, rest] = exp.split(" (");
                    const [period, description] = rest.split("): ");
                    return {
                      title,
                      period: period.replace(")", ""),
                      description,
                    };
                  })
                );
              }}
              isEditing={editingExperiences}
              setIsEditing={setEditingExperiences}
            />
          </section>

          <Separator />

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Educación</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingEducation(!editingEducation)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>
            {!editingEducation && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    {education.degree}
                  </CardTitle>
                  <CardDescription>
                    {education.school}, {education.year}
                  </CardDescription>
                </CardHeader>
              </Card>
            )}
            <EditableSection
              title="Educación"
              content={`${education.degree}, ${education.school}, ${education.year}`}
              onSave={(newEducation) => {
                const [degree, school, year] = newEducation.split(", ");
                setEducation({ degree, school, year });
              }}
              isEditing={editingEducation}
              setIsEditing={setEditingEducation}
            />
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Intereses</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingInterests(!editingInterests)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>
            {!editingInterests && (
              <div className="flex flex-wrap gap-4 mb-2">
                {interests.map((interest, index) => (
                  <Badge key={index} className="p-3 text-base">
                    {index === 0 && <BookOpen className="w-5 h-5 mr-2" />}
                    {index === 1 && <Users className="w-5 h-5 mr-2" />}
                    {index === 2 && <MessageSquare className="w-5 h-5 mr-2" />}
                    {interest}
                  </Badge>
                ))}
              </div>
            )}
            <EditableSection
              title="Intereses"
              content={interests}
              onSave={setInterests}
              isEditing={editingInterests}
              setIsEditing={setEditingInterests}
            />
          </section>

          <Separator />

          <div className="flex justify-center">
            <Button className="w-full sm:w-auto">Conectar con Jane</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
