import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FreeCategory } from "../components/Category/FreeCategory";
import { categoriesData } from "../data/categoriesData";

export const Categories = () => {
  // const [categories, setCategories] = useState("");
  // useEffect(() => {
  //   fetch("http://localhost:5000/book?category=cat", { method: "get" })
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data.category));
  // });

  return (
    <>
      <Container>
        <h1>Категории</h1>
        <Row>
          <Col>
            {/* {categoriesData.map((category) => (
              <Category
                key={category.id}
                categoryTitleText={category.categoryTitleText}
              />
            ))} */}
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
