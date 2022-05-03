import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from 'react';

const style = {
  width: "40vw",
  textAlign: "center",
  justifyContent: "center",
};

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleOnSubmit = async (e) => {
      e.preventDefault();
      let result = await fetch(
      'http://localhost:5000/login', {
          method: "post",
          body: JSON.stringify({ name, password }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      //result = await result.json();
      result.text().then(function (result_text) {
        if (result_text === 'login_ok') {
          alert("User login!");
        } else if (result_text === 'login_already') {
          alert("User already login!");
        } else if (result_text === 'user_not_exist') {
          alert("User not exist!");
        } else if (result_text === 'user_not_unique') {
          alert("User not unique!");
        } else {
          alert("Login error!");
        }
      });
  }
  return (
    <>
      <Container style={style}>
        <h1>Авторизация</h1>
        <p>Чтобы войти в систему, введите свои email и пароль</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Введите email" onChange={(e) => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Введите пароль" onChange={(e) => setPassword(e.target.value)}/>
            <Form.Text className="text-muted">
              Мы никому не сообщим Ваши личные данные.
            </Form.Text>
          </Form.Group>
          <Row className="mb-5">
            <Col>
              <Button
                className="mb-1"
                href="/registration"
                style={{ width: "100%", color: "#262525FF" }}
                variant="light"
              >
                Зарегистрироваться
              </Button>
            </Col>
            <Col>
              <Button style={{ width: "100%" }} variant="success" type="submit" onClick={handleOnSubmit}>
                Войти
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
