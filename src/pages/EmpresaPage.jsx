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
          Cancel
        </Button>
        <Button type="submit">
          <Check className="w-4 h-4 mr-2" />
          Save
        </Button>
      </div>
    </form>
  );
};

export default function EmpresaPage() {
  const [companyInfo, setCompanyInfo] = useState({
    name: "TechInnovate Solutions",
    tagline: "Empowering Businesses Through Innovative Technology",
    founded: "2010",
    employees: "250+",
    location: "San Francisco, CA",
  });
  const [aboutUs, setAboutUs] = useState(
    "TechInnovate Solutions is a leading technology company dedicated to creating cutting-edge software solutions for businesses of all sizes. With a focus on innovation and user-centric design, we help our clients stay ahead in the digital landscape."
  );
  const [mission, setMission] = useState(
    "Our mission is to empower businesses with transformative technology solutions that drive growth, efficiency, and innovation in an ever-evolving digital world."
  );
  const [services, setServices] = useState([
    "Custom Software Development",
    "Cloud Solutions",
    "AI and Machine Learning Integration",
    "Cybersecurity Services",
    "Digital Transformation Consulting",
  ]);
  const [projects, setProjects] = useState([
    {
      name: "SmartCity Initiative",
      description:
        "Developed an IoT-based smart city management system for improved urban living.",
    },
    {
      name: "FinTech Revolution",
      description:
        "Created a blockchain-based financial platform for secure and transparent transactions.",
    },
    {
      name: "HealthTech Innovation",
      description:
        "Launched an AI-powered health monitoring app for personalized patient care.",
    },
  ]);
  const [team, setTeam] = useState([
    "Dr. Emily Chen - CEO & Founder",
    "Michael Rodriguez - CTO",
    "Sarah Johnson - Head of Innovation",
    "David Lee - Lead Software Architect",
    "Lisa Wong - Director of Client Relations",
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
              alt="Company logo"
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
                <Building2 className="w-4 h-4 mr-1" /> Founded:{" "}
                {companyInfo.founded}
              </Badge>
              <Badge>
                <Users className="w-4 h-4 mr-1" /> Employees:{" "}
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
              <h2 className="text-2xl font-semibold">About Us</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingAboutUs(!editingAboutUs)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>
            {!editingAboutUs && <p>{aboutUs}</p>}
            <EditableSection
              title="About Us"
              content={aboutUs}
              onSave={setAboutUs}
              isEditing={editingAboutUs}
              setIsEditing={setEditingAboutUs}
            />
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingMission(!editingMission)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>
            {!editingMission && (
              <div className="flex items-start">
                <Target className="w-6 h-6 mr-2 mt-1 flex-shrink-0" />
                <p>{mission}</p>
              </div>
            )}
            <EditableSection
              title="Our Mission"
              content={mission}
              onSave={setMission}
              isEditing={editingMission}
              setIsEditing={setEditingMission}
            />
          </section>

          <Separator />

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Our Services</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingServices(!editingServices)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Edit
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
              title="Our Services"
              content={services}
              onSave={setServices}
              isEditing={editingServices}
              setIsEditing={setEditingServices}
            />
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Featured Projects</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingProjects(!editingProjects)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Edit
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
              title="Featured Projects"
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
              <h2 className="text-2xl font-semibold">Our Team</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingTeam(!editingTeam)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Edit
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
              title="Our Team"
              content={team}
              onSave={setTeam}
              isEditing={editingTeam}
              setIsEditing={setEditingTeam}
            />
          </section>

          <Separator />

          <div className="flex justify-center">
            <Button className="w-full sm:w-auto">Contact Us</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
