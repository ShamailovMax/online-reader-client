import React from "react";
import { Container } from "react-bootstrap";

// просто футер
export const Footer = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#bfbfc9",
        color: "#fff",
        bottom: 0,
        left: 0,
        display: "block",
        position: "static",
      }}
    >
      <Container
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <p style={{ textAlign: "center" }}>
          ИУ5-83, Шамаилов Максим
          <br />
          Веб-сервис поиска и просмотра информационных материалов
          <br />
          2022
        </p>
      </Container>
    </Container>
  );
};
