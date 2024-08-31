import React from "react";
import { Button } from "@/components/ui/button";
import certificateImage from "../assets/neurotipico_certificate.png";
import NavBarNeurotipico from "@/components/NavBarNeurotipico";

export default function CertificatePage() {
  return (
    <div className="container mx-auto p-4 mt-20">
      <NavBarNeurotipico />
      <h1 className="text-3xl font-bold mb-6">
        Certificación en Interacción con Personas Neurodivergentes
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Propósito del Curso y Certificado
          </h2>
          <p className="mb-4">
            Este curso está diseñado para personas neurotípicas que desean
            mejorar su comprensión y habilidades de interacción con individuos
            neurodivergentes. Al completar este curso, obtendrás un certificado
            que demuestra tu compromiso con la inclusión y tu capacidad para
            crear un ambiente más acogedor para personas neurodivergentes.
          </p>
          <p className="mb-4">Al obtener esta certificación, demostrarás:</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Comprensión de la neurodiversidad y sus diferentes manifestaciones
            </li>
            <li>
              Habilidades de comunicación efectiva con personas neurodivergentes
            </li>
            <li>
              Conocimiento sobre cómo adaptar entornos para ser más inclusivos
            </li>
            <li>
              Capacidad para reconocer y responder a las necesidades específicas
            </li>
            <li>Compromiso con la creación de una sociedad más inclusiva</li>
          </ul>
          <p className="mb-6">
            Este certificado no solo beneficia a las personas neurodivergentes
            con las que interactúas, sino que también enriquece tu desarrollo
            personal y profesional.
          </p>
          <Button>Inscribirse al Curso</Button>
        </div>

        <div className="flex justify-center">
          <img
            src={certificateImage}
            alt="Certificado de Interacción con Personas Neurodivergentes"
            className="max-w-full h-auto shadow-lg rounded-lg"
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Contenido del Curso</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Introducción a la neurodiversidad</li>
          <li>Tipos de neurodivergencia (autismo, TDAH, dislexia, etc.)</li>
          <li>Comunicación efectiva con personas neurodivergentes</li>
          <li>Creación de entornos inclusivos</li>
          <li>Manejo de situaciones específicas y resolución de conflictos</li>
          <li>
            Promoción de la inclusión en diferentes contextos (laboral,
            educativo, social)
          </li>
        </ol>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Proceso de Certificación
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Inscripción al curso en línea</li>
          <li>Completar todos los módulos del curso</li>
          <li>Realizar pruebas cortas y estudios de caso</li>
          <li>Aprobar el examen final</li>
          <li>Recibir el certificado digital</li>
        </ol>
      </div>

      <div className="mt-12 text-center">
        <p className="mb-4">
          ¿Listo para mejorar tus habilidades de interacción con personas
          neurodivergentes?
        </p>
        <Button size="lg">Comenzar el Curso de Certificación</Button>
      </div>
    </div>
  );
}
