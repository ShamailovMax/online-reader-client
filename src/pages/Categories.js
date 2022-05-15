import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Category } from "../components/Category/Category";
import { categoriesData } from "../data/categoriesData";

export const Categories = () => {
  return (
    <>
      <Container>
        <h1>Категории</h1>
        <Row>
          <Col>
            {categoriesData.map((category) => (
              <Category
                key={category.id}
                categoryTitleText={category.categoryTitleText}
              />
            ))}
          </Col>
          <Col xs={8} style={{ fontSize: '20px', width: '40vw' }}>
            <p>Здесь Вы можете выбрать категорию, которая наиболее по душе. Для этого кликните по одной из категорий</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
