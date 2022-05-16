import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./Category.module.css";

export const ScienceCategory = () => {
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/book?category=Научная литература", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => setCategoryName(data.category));
  });

  return (
    <>
      <Card className={style.categoryCard}>
        <Card.Body
          onClick={() => {
            navigate("/categories/science");
          }}
        >
          <Card.Title>Научная литература</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
