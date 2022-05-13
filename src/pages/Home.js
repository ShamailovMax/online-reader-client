import React from "react";
import { Card, Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import { CardList } from "../components/CardList/CardList";

export const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Каталог</h1>
          </Col>
          <Col>
            <Form.Control type='text' placeholder='Поиск...' style={{ width: '30vw' }} />
          </Col>
        </Row>
        <h4 style={{ color: "#636669" }}>Популярное</h4>
        <CardList />
      </Container>
    </>
  );
};
