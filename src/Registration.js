import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const style = {
  width: "40vw",
  textAlign: "center",
  justifyContent: "center",
};

// todo: допилить регистрацию
// todo: сделать валидацию в сервере

export const Registration = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    if (password !== passwordRe) {
      alert("Подтвердите пароль корректно");
      return;
    }

    e.preventDefault();
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result.text().then(function (result_text) {
      if (result_text === "reg_error") {
        alert("Пользователь с таким именем уже существует!");
      } else {
        alert("Вы успешно зарегистрировались!");
        navigate("/login");
      }
    });
  };

  return (
    <>
      <Container style={style}>
        <h1>Регистрация</h1>
        <p>Чтобы войти в систему, введите свой email и придумайте пароль</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Введите email"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Придумайте пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordRe">
            <Form.Control
              type="password"
              placeholder="Повторите пароль"
              onChange={(e) => setPasswordRe(e.target.value)}
            />
            <Form.Text className="text-muted">
              Мы никому не сообщим Ваши личные данные.
            </Form.Text>
          </Form.Group>
          <Row className="mb-5">
            <Col>
              <Button
                className="mb-1"
                href="/login"
                style={{ width: "100%", color: "#262525" }}
                variant="light"
              >
                Войти
              </Button>
            </Col>
            <Col>
              <Button
                style={{ width: "100%" }}
                variant="primary"
                type="submit"
                onClick={handleOnSubmit}
              >
                Зарегистрироваться
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
