import React, { useState, useEffect } from "react";
import { ReadProgress } from "../components/ReadProgress/ReadProgress.js";

import { Button, Container } from "react-bootstrap";

export const BookPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isloaded, setLoaded] = useState(false);
  let pageNumberCurrent = 1;
  const [text, setText] = useState("");
  const [maxPage, setMaxPage] = useState(1);

  const handleDecrementPage = async (e) => {
    // if (pageNumberCurrent > 1) {
    //   pageNumberCurrent -= 1;
    //   setPageNumber(pageNumberCurrent);
    // }
    console.log(pageNumberCurrent);
    setPageNumber(pageNumber - 1);
    getPage();
  };

  const handleIncrimentPage = async (e) => {
    // if (pageNumberCurrent < maxPage) {
    //   pageNumberCurrent += 1;
    //   setPageNumber(pageNumberCurrent);
    // }
    console.log(pageNumberCurrent);
    setPageNumber(pageNumber + 1);
    getPage();
  };

  // * тут будет метод для получения книги и отображения на экран
  const handleGetBook = (e) => {
    getPage();
  };

  useEffect(() => {
    if (!isloaded) {
      getPage();
      // setLoaded(true);
    }
    return () => {};
  });

  const getPage = () => {
    let name = window.location.href
      .split("?")[1]
      .split("=")[1]
      .replace("%20", " ");
    fetch(`http://localhost:5000/get_page`, {
      method: "post",
      body: JSON.stringify({ name, pageNumber }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setText(data.page);
        setMaxPage(data.max_page_count);
      });
  };

  return (
    <>
      <Container className="book-info">
        <h2>Название книги</h2>
        <div className="book-info__description">
          <p>Описание книги</p>
          <span>4 стр.</span>
        </div>
        <Button variant="success" type="submit" onClick={handleGetBook}>
          Прочитать книгу
        </Button>
        <br />
        {pageNumber > 1 && <Button onClick={handleDecrementPage}>назад</Button>}
        <span> Страница {pageNumber} </span>
        {pageNumber < maxPage && (
          <Button onClick={handleIncrimentPage}>вперед</Button>
        )}
        <br />
        {text}
      </Container>
      <ReadProgress />
    </>
  );
};
