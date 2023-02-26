import React from "react";
import Figure from "react-bootstrap/Figure";

export const HomePage = () => {
  return (
    <section className="d-flex flex-column">
      <h1 className="text-center">¡Bienvenidos!</h1>
      <Figure className="text-center">
        <Figure.Image
          roundedCircle
          width={171}
          height={180}
          alt="171x180"
          src="https://raw.githubusercontent.com/soyadrianamorenogutierrez/bit09/main/public/img/lago3.jpg"
        />
        <Figure.Caption className="text-name">
          Adriana Moreno Gutierrez
        </Figure.Caption>
      </Figure>
    </section>
  );
};
