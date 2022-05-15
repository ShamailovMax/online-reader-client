import React from "react";
import { Container } from "react-bootstrap";
import { Category } from "../components/Category/Category";
import { categoriesData } from "../data/categoriesData";

export const Categories = () => {
  return (
    <>
      <Container>
        <h1>Категории</h1>
        {categoriesData.map((category) => (
          <Category
            key={category.id}
            categoryTitleText={category.categoryTitleText}
          />
        ))}
      </Container>
    </>
  );
};
