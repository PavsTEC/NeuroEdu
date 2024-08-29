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

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [aboutMe, setAboutMe] = useState(
    "I'm a software developer with 5 years of experience. I'm passionate about creating accessible and user-friendly applications. As an individual on the autism spectrum, I bring a unique perspective to problem-solving and attention to detail."
  );
  const [communicationPreferences, setCommunicationPreferences] = useState([
    "Prefer written communication over phone calls",
    "Please be direct and specific in instructions",
    "I may need extra time to process complex social situations",
  ]);
  const [skills, setSkills] = useState([
    "JavaScript",
    "React",
    "Node.js",
    "Accessibility",
    "Problem Solving",
    "Data Analysis",
  ]);
  const [experiences, setExperiences] = useState([
    {
      title: "Senior Developer at TechCorp",
      period: "2018 - Present",
      description:
        "Leading accessibility initiatives and developing robust web applications.",
    },
    {
      title: "Junior Developer at StartUp Inc",
      period: "2016 - 2018",
      description:
        "Worked on various frontend projects and improved my coding skills.",
    },
  ]);
  const [education, setEducation] = useState({
    degree: "BS in Computer Science",
    school: "University of Technology",
    year: "2016",
  });
  const [interests, setInterests] = useState([
    "Reading Sci-Fi",
    "Autism Support Groups",
    "Tech Meetups",
  ]);

  const [editingAboutMe, setEditingAboutMe] = useState(false);
  const [editingCommunicationPreferences, setEditingCommunicationPreferences] =
    useState(false);
  const [editingSkills, setEditingSkills] = useState(false);
  const [editingExperiences, setEditingExperiences] = useState(false);
  const [editingEducation, setEditingEducation] = useState(false);
  const [editingInterests, setEditingInterests] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen p-8 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Card
        className={`max-w-4xl mx-auto ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
          <Avatar className="w-32 h-32">
            <AvatarImage
              src="/placeholder.svg?height=128&width=128"
              alt="Profile picture"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-3xl">Jane Doe</CardTitle>
            <CardDescription className="text-xl">
              Software Developer | Autism Advocate
            </CardDescription>
          </div>
          <div className="sm:ml-auto flex items-center gap-2">
            <span>Color Mode</span>
            <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">About Me</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingAboutMe(!editingAboutMe)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>
            {!editingAboutMe && <p>{aboutMe}</p>}
            <EditableSection
              title="About Me"
              content={aboutMe}
              onSave={setAboutMe}
              isEditing={editingAboutMe}
              setIsEditing={setEditingAboutMe}
            />
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">
                Communication Preferences
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
                Edit
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
              title="Communication Preferences"
              content={communicationPreferences}
              onSave={setCommunicationPreferences}
              isEditing={editingCommunicationPreferences}
              setIsEditing={setEditingCommunicationPreferences}
            />
          </section>

          <Separator />

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Skills</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingSkills(!editingSkills)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Edit
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
              title="Skills"
              content={skills}
              onSave={setSkills}
              isEditing={editingSkills}
              setIsEditing={setEditingSkills}
            />
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Experience</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingExperiences(!editingExperiences)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>
            {!editingExperiences &&
              experiences.map((exp, index) => (
                <Card
                  key={index}
                  className={`mb-4 ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-50"
                  }`}
                >
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
              title="Experience"
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
              <h2 className="text-2xl font-semibold">Education</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingEducation(!editingEducation)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>
            {!editingEducation && (
              <Card className={`${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
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
              title="Education"
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
              <h2 className="text-2xl font-semibold">Interests</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingInterests(!editingInterests)}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Edit
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
              title="Interests"
              content={interests}
              onSave={setInterests}
              isEditing={editingInterests}
              setIsEditing={setEditingInterests}
            />
          </section>

          <Separator />

          <div className="flex justify-center">
            <Button className="w-full sm:w-auto">Connect with Jane</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
