import React from "react";
import { Button } from "@/components/ui/button";
import certificateImage from "../assets/certificate.png";
import NavBarEmpresa from "@/components/NavBarEmpresa";
export default function CertificadosPage() {
  return (
    <div className="container mx-auto p-4 mt-20">
      <NavBarEmpresa />
      <h1 className="text-3xl font-bold mb-6">Certificación para Empresas</h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Propósito del Certificado
          </h2>
          <p className="mb-4">
            Nuestro certificado de reconocimiento es otorgado a empresas que
            demuestran un compromiso excepcional con la inclusión y el apoyo a
            personas neurodivergentes en el lugar de trabajo. Este certificado
            reconoce a las organizaciones como "Great Place to Work para
            personas con TEA" (Trastorno del Espectro Autista).
          </p>
          <p className="mb-4">
            Al obtener esta certificación, su empresa demuestra:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Compromiso con la diversidad e inclusión</li>
            <li>Adaptación del entorno laboral para necesidades específicas</li>
            <li>Formación y sensibilización del personal</li>
            <li>
              Oportunidades de crecimiento para empleados neurodivergentes
            </li>
            <li>
              Políticas y prácticas que fomentan un ambiente de trabajo
              inclusivo
            </li>
          </ul>
          <p className="mb-6">
            Esta certificación no solo beneficia a los empleados
            neurodivergentes, sino que también enriquece la cultura de la
            empresa, fomenta la innovación y mejora la reputación corporativa.
          </p>
          <Button>Solicitar Certificación</Button>
        </div>

        <div className="flex justify-center">
          <img
            src={certificateImage}
            alt="Certificado de Reconocimiento"
            className="max-w-full h-auto shadow-lg rounded-lg"
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Proceso de Certificación
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Solicitud inicial: Complete el formulario de solicitud en línea.
          </li>
          <li>
            Evaluación: Nuestro equipo revisará las políticas y prácticas de su
            empresa.
          </li>
          <li>
            Visita in situ: Realizaremos una visita para evaluar el ambiente de
            trabajo.
          </li>
          <li>
            Feedback: Proporcionaremos un informe detallado con recomendaciones.
          </li>
          <li>Implementación: Trabaje en las áreas de mejora identificadas.</li>
          <li>
            Certificación: Una vez cumplidos los criterios, se otorga el
            certificado.
          </li>
        </ol>
      </div>

      <div className="mt-12 text-center">
        <p className="mb-4">
          ¿Listo para demostrar el compromiso de su empresa con la inclusión de
          personas neurodivergentes?
        </p>
        <Button size="lg">Iniciar Proceso de Certificación</Button>
      </div>
    </div>
  );
}
