import React from "react";
import { Button, Card, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

export const Category = (props) => {
  //   const navigate = useNavigate();

  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Body>
        <Card.Title>{props.categoryTitleText}</Card.Title>
      </Card.Body>
    </Card>
  );
};
