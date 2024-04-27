import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import requirements from "./requirements.data";
import Heading from "../../Atoms/Heading/Heading";
import RequirementCard from "../../Molecules/RequirementCard/RequirementCard";
import "./Requisitos.css";

const Requisitos = () => {
  return (
    <section id="acerca-de" className="requirements-section">
      <div className="heading">
        <Heading as="h2">Requisitos para Adoptar</Heading>
        <p>
          El proceso de adopción es simple, pero necesita de disposición,
          interés y cuidado. Estos son los requerimientos que todo adoptante
          debe considerar:
        </p>
      </div>
      <ul className="requirements">
        {requirements.map((item, index) => (
          <RequirementCard key={index} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Requisitos;
