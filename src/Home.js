import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

export const Home = () => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  return (
    <>
      <Container>
        <h1>Каталог</h1>
        <h4 style={{ color: '#636669' }}>Популярное</h4>
        <Card style={{ width: "16rem", marginBottom: '1rem' }}>
          <Card.Body>
            <Card.Title>Война и Мир - Л. Н. Толстой</Card.Title>
            <Card.Text>Главный труд всей жизни Льва Николаевича</Card.Text>
            <div>
              <Button href="/book" variant="primary">
                Перейти
              </Button>
              <Button
                variant={!addedToFavorites ? "warning" : "danger"}
                className="mt-1"
                onClick={() => {
                  setAddedToFavorites(!addedToFavorites);
                }}
              >
                {!addedToFavorites
                  ? "Добавить в закладки"
                  : "Удалить из закладок"}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
