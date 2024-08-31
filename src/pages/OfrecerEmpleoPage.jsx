import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import NavBarEmpresa from "@/components/NavBarEmpresa";

export default function OfrecerEmpleoPage() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [benefits, setBenefits] = useState("");
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleContinue = () => {
    setShowModal(false);
  };

  const handleGoToCertificates = () => {
    navigate("/certificados");
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <NavBarEmpresa />
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Información Importante</DialogTitle>
            <DialogDescription>
              Solo las empresas certificadas pueden ofrecer puestos de empleo en
              nuestra plataforma. Esto asegura que todas las ofertas sean
              adecuadas para personas neurodivergentes.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={handleGoToCertificates}>
              Ir a Certificados
            </Button>
            <Button onClick={handleContinue}>Continuar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <h1 className="text-3xl font-bold mb-6">
        Ofrecer Empleo para Personas Neurodivergentes
      </h1>
      <form className="space-y-6">
        <div>
          <Label htmlFor="jobTitle">Título del Puesto</Label>
          <Input
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="company">Empresa</Label>
          <Input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="location">Ubicación</Label>
          <Input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="jobType">Tipo de Empleo</Label>
          <Select value={jobType} onValueChange={setJobType}>
            <SelectTrigger id="jobType">
              <SelectValue placeholder="Selecciona el tipo de empleo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fullTime">Tiempo Completo</SelectItem>
              <SelectItem value="partTime">Medio Tiempo</SelectItem>
              <SelectItem value="contract">Contrato</SelectItem>
              <SelectItem value="temporary">Temporal</SelectItem>
              <SelectItem value="internship">Pasantía</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="salary">Salario</Label>
          <Input
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Ej: $50,000 - $70,000 al año"
          />
        </div>

        <div>
          <Label htmlFor="description">Descripción del Puesto</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="requirements">Requisitos</Label>
          <Textarea
            id="requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="benefits">Beneficios</Label>
          <Textarea
            id="benefits"
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full">
          Publicar Oferta de Empleo
        </Button>
      </form>
    </div>
  );
}
