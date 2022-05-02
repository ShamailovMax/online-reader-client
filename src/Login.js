import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const style = {
  width: "40vw",
  textAlign: "center",
  justifyContent: "center",
};

export const Login = () => {
  return (
    <>
      <Container style={style}>
        <h1>Авторизация</h1>
        <p>Чтобы войти в систему, введите свои email и пароль</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Введите email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Введите пароль" />
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
              <Button style={{ width: "100%" }} variant="success" type="submit">
                Войти
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
