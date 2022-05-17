import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import style from "./AddBookForm.module.css";

export const AddBookForm = () => {
  return (
    <>
      <Container style={style.addBookFormBody}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Введите название вашей публикации" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Добавьте небольшое описание" />
          </Form.Group>
          <h3>Место для drag and drop</h3>
          <Button type="submit">Опубликовать</Button>
        </Form>
      </Container>
    </>
  );
};
