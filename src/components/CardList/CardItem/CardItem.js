import { Card, Button } from "react-bootstrap";
import React from "react";

export const CardItem = () => {
  return (
    <>
      <Card
        style={{ width: "16rem", marginBottom: "1rem", marginRight: ".5rem" }}
      >
        <Card.Body>
          <Card.Title>Динамические системы - википедия</Card.Title>
          <Card.Text>
            Динамическая система — множество элементов, для которого задана
            функциональная зависимость между временем и положением в фазовом
            пространстве каждого элемента системы.
          </Card.Text>
          <div>
            <Button href="/book?name=Book 1" variant="primary">
              Перейти
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
