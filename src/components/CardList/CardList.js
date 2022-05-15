import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
// import { CardItem } from "./CardItem/CardItem";
import style from "./CardList.module.css";
import axios from "axios";

export const CardList = () => {
  // const [name, setName] = useState("");

  // let infoBody = {
  //   name: name,
  // };

  // const getBookInfo = () =>
  //   fetch(`http://localhost:5000/get_book`, {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  // const axiosInstance = axios.create({
  //   baseUrl: "http://localhost:5000/get_page",
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Content-Type": "application/json",
  //   },
  // });

  // const [book, setBook] = useState(null);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/books").then((res) => {
  //     setBook(res.data);
  //   });
  // });

  // console.log(book);  

  return (
    <Container className={style.cardList}>
      <Card
        style={{ width: "16rem", marginBottom: "1rem", marginRight: ".5rem" }}
      >
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Динамическая система — множество элементов, для которого задана
            функциональная зависимость между временем и положением в фазовом
            пространстве каждого элемента системы.
          </Card.Text>
          <div>
            <Button href="/book?name=Book 2" variant="primary">
              Перейти
            </Button>
            <Button className={style.addBtn}>+</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};
