import React from "react";
import { Button, Card, Container } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      <Container>
        <h1>Каталог</h1>
        <p>главная страница сервиса</p>
        <Card style={{ width: "16rem" }}>
          <Card.Body>
            <Card.Title>Война и Мир - Л. Н. Толстой</Card.Title>
            <Card.Text>Главный труд всей жизни Льва Николаевича</Card.Text>
            <Button href="/book" variant="primary">
              Перейти
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
