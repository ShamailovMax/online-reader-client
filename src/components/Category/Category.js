import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import style from "./Category.module.css";

export const Category = (props) => {
  return (
    <Card className={style.categoryCard}>
      <Card.Body>
        <Card.Title>{props.categoryTitleText}</Card.Title>
      </Card.Body>
    </Card>
  );
};
