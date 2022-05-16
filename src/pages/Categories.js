import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { FreeCategory } from "../components/Category/FreeCategory";
import { ScienceCategory } from "../components/Category/ScienceCategory";

export const Categories = () => {
  return (
    <>
      <Container>
        <h1>Категории</h1>
        <Row>
          <Col>
            <ScienceCategory />
            <FreeCategory />
          </Col>
          <Col xs={8} style={{ fontSize: "20px", width: "40vw" }}>
            <p>
              Здесь Вы можете выбрать категорию, которая наиболее по душе. Для
              этого кликните по одной из категорий
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
