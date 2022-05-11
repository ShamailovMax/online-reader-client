import React from "react";
import { Container } from "react-bootstrap";
import { CardItem } from "./CardItem/CardItem";
import style from './CardList.module.css'

export const CardList = () => {
  return (
    <Container className={style.cardList}>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </Container>
  );
};
