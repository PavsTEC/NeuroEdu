import NavBarSolicitante from "../../components/NavBarSolicitante/NavBarSolicitante";
import React, { useState } from "react";
import { Edit2, Plus, Briefcase, GraduationCap, MapPin } from "lucide-react";

export default function SolicitantePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Juan Pérez",
    title: "Desarrollador de Software",
    location: "Ciudad de México, México",
    about:
      "Soy un desarrollador apasionado por crear soluciones innovadoras...",
    experience: [
      {
        id: 1,
        title: "Desarrollador Senior",
        company: "Tech Co",
        duration: "2020 - Presente",
      },
      {
        id: 2,
        title: "Desarrollador Junior",
        company: "Startup Inc",
        duration: "2018 - 2020",
      },
    ],
    education: [
      {
        id: 1,
        degree: "Ingeniería en Sistemas",
        school: "Universidad Tecnológica",
        year: "2018",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "Python"],
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (section, value) => {
    setProfile({ ...profile, [section]: value });
    setIsEditing(false);
  };

  const handleAddItem = (section) => {
    const newItem = { id: Date.now(), title: "Nuevo ítem" };
    setProfile({ ...profile, [section]: [...profile[section], newItem] });
  };

  return (
    <>
      <header>
        <NavBarSolicitante />
      </header>

      <div className="profile-page">
        <header className="profile-header">
          <div className="profile-image">
            <img
              src="/placeholder.svg?height=150&width=150"
              alt="Foto de perfil"
            />
          </div>
          <div className="profile-info">
            <h1>{profile.name}</h1>
            <p>{profile.title}</p>
            <p>
              <MapPin size={16} /> {profile.location}
            </p>
          </div>
        </header>

        <section className="profile-section">
          <h2>Acerca de</h2>
          {isEditing ? (
            <textarea
              value={profile.about}
              onChange={(e) => handleSave("about", e.target.value)}
            />
          ) : (
            <p>{profile.about}</p>
          )}
          <button className="edit-button" onClick={handleEdit}>
            <Edit2 size={16} />
          </button>
        </section>

        <section className="profile-section">
          <h2>Experiencia</h2>
          {profile.experience.map((exp) => (
            <div key={exp.id} className="experience-item">
              <Briefcase size={16} />
              <div>
                <h3>{exp.title}</h3>
                <p>{exp.company}</p>
                <p>{exp.duration}</p>
              </div>
            </div>
          ))}
          <button
            className="add-button"
            onClick={() => handleAddItem("experience")}
          >
            <Plus size={16} /> Añadir experiencia
          </button>
        </section>

        <section className="profile-section">
          <h2>Educación</h2>
          {profile.education.map((edu) => (
            <div key={edu.id} className="education-item">
              <GraduationCap size={16} />
              <div>
                <h3>{edu.degree}</h3>
                <p>{edu.school}</p>
                <p>{edu.year}</p>
              </div>
            </div>
          ))}
          <button
            className="add-button"
            onClick={() => handleAddItem("education")}
          >
            <Plus size={16} /> Añadir educación
          </button>
        </section>

        <section className="profile-section">
          <h2>Habilidades</h2>
          <div className="skills-list">
            {profile.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
          <button
            className="add-button"
            onClick={() => handleAddItem("skills")}
          >
            <Plus size={16} /> Añadir habilidad
          </button>
        </section>
      </div>
    </>
  );
}
