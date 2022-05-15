import React, { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./Category.module.css";

export const FreeCategory = () => {
  const navigate = useNavigate()

  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/book?category=Бесплатно", { method: "get" })
      .then((res) => res.json())
      .then((data) => setCategoryName(data.category));
  });

  return (
    <>
      <Card className={style.categoryCard}>
        <Card.Body onClick={() => {navigate('/free')}}>
          <Card.Title>
            Бесплатно
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
