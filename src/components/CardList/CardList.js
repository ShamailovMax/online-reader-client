import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
// import { CardItem } from "./CardItem/CardItem";
import style from "./CardList.module.css";
import axios from "axios";

export const CardList = () => {
  return (
    <Container className={style.cardList}>
      <Card
        style={{ width: "16rem", marginBottom: "1rem", marginRight: ".5rem" }}
      >
        <Card.Body>
          <Card.Title>Динамические системы</Card.Title>
          <Card.Text>
            Динамическая система — множество элементов, для которого...
          </Card.Text>
          <div>
            <Button href="/book?name=Book 2" variant="primary">
              Перейти
            </Button>
            <Button className={style.addBtn}>+</Button>
          </div>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "16rem", marginBottom: "1rem", marginRight: ".5rem" }}
      >
        <Card.Body>
          <Card.Title>Капитанская дочка</Card.Title>
          <Card.Text>
            Капитанская дочка - А.С.Пушкин
          </Card.Text>
          <div>
            <Button href="/book?name=Book 3" variant="primary">
              Перейти
            </Button>
            <Button className={style.addBtn}>+</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};
