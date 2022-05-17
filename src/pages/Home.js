import React from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Form,
} from "react-bootstrap";
import { CardList } from "../components/CardList/CardList";
import { Slider } from "../components/Slider/Slider";

export const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Каталог</h1>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Поиск..."
              style={{ width: "30vw" }}
            />
          </Col>
        </Row>
        <Slider />
        <br />
        <Row>
          <Col>
            <h4 style={{ color: "#636669" }}>Популярное</h4>
          </Col>
          <Col>
            <a href="/categories">В категории</a>
          </Col>
        </Row>

        <CardList />
      </Container>
    </>
  );
};
