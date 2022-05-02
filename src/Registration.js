import { Button, Col, Container, Form, Row } from "react-bootstrap";

const style = {
  width: "40vw",
  textAlign: "center",
  justifyContent: "center",
};

// todo: допилить регистрацию
// todo: сделать валидацию в сервере

export const Registration = () => {
  return (
    <>
      <Container style={style}>
        <h1>Регистрация</h1>
        <p>Чтобы войти в систему, введите свой email и придумайте пароль</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Введите email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Придумайте пароль" />
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
                Есть аккаунт?
              </Button>
            </Col>
            <Col>
              <Button style={{ width: "100%" }} variant="primary" type="submit">
                Зарегистрироваться
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
