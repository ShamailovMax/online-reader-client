import React, { useState, useEffect } from "react";
import { ReadProgress } from "../components/ReadProgress/ReadProgress.js";

import { Button } from "react-bootstrap";

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
      setLoaded(true);
    }
    return () => {};
  }, [getPage, setLoaded]);

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
      <div>
        <Button variant="success" type="submit" onClick={handleGetBook}>
          Прочитать книгу
        </Button>
        <Button onClick={handleDecrementPage}>назад</Button>
        Страница {pageNumber}
        <Button onClick={handleIncrimentPage}>вперед</Button>
        {text}
      </div>
      <ReadProgress />
    </>
  );
};
