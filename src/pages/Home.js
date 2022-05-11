import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { CardList } from "../components/CardList/CardList";

export const Home = () => {
  return (
    <>
      <Container>
        <h1>Каталог</h1>
        <h4 style={{ color: "#636669" }}>Популярное</h4>
        <CardList />
      </Container>
    </>
  );
};
