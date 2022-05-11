import { Card, Button } from "react-bootstrap";
import React from "react";

export const CardItem = () => {
  return (
    <>
      <Card
        style={{ width: "16rem", marginBottom: "1rem", marginRight: ".5rem" }}
      >
        <Card.Body>
          <Card.Title>Война и Мир - Л. Н. Толстой</Card.Title>
          <Card.Text>Главный труд всей жизни Льва Николаевича</Card.Text>
          <div>
            <Button href="/book" variant="primary">
              Перейти
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
