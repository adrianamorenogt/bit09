import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { Exercise1 } from "./Exercise1";
import { Exercise2 } from "./Exercise2";
import { Exercise3 } from "./Exercise3";

export const ExercisesPage = () => {
  const [exercise, setExercise] = useState(null);
  return (
    <section>
      <h1 className="text-center">Ejercicios</h1>
      {!exercise ? (
        <ol>
          <li onClick={() => setExercise(<Exercise1 />)}>Contador</li>
          <li onClick={() => setExercise(<Exercise2 />)}>API Patos</li>
          <li onClick={() => setExercise(<Exercise3 />)}>Directorio</li>
        </ol>
      ) : (
        <div className="text-center">
          {exercise}
          <Button variant="link" onClick={() => setExercise(null)}>
            Regresar
          </Button>
        </div>
      )}
    </section>
  );
};
