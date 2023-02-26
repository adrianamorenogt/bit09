import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export const Exercise1 = () => {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (contador > 0) setColor("success");
    else if (contador < 0) setColor("warning");
    else setColor("primary");
  }, [contador]);

  return (
    <section>
      <h2>
        Contador: <Badge bg={color}>{contador}</Badge>
      </h2>
      <Button
        variant="outline-warning"
        onClick={() => setContador(contador - 1)}
      >
        <i className="bi bi-dash-circle-dotted"></i>
      </Button>
      <Button variant="outline-danger mx-2" onClick={() => setContador(0)}>
        <i className="bi bi-arrow-clockwise"></i>
      </Button>
      <Button
        variant="outline-success"
        onClick={() => setContador(contador + 1)}
      >
        <i className="bi bi-plus-circle-dotted"></i>
      </Button>
    </section>
  );
};
