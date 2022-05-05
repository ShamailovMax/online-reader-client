import React from "react";
import { Accordion, Button, Container } from "react-bootstrap";
import { faqData } from "../data/faqData";

const style = {
  width: "560px",
  margin: "5rem auto",
};

export const About = () => {
  return (
    <Container style={style}>
      <div>
        <h3>Информация</h3>
        <p>
          Здесь представлено немного информации о нас, а также ответы на часто
          задаваемые вопросы
        </p>
      </div>
      <Accordion defaultActiveKey="0" flush style={{ marginBottom: "1rem" }} alwaysOpen>
        {faqData.map((faq) => {
          return (
            <Accordion.Item key={faq.id} eventKey={faq.id}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
      <Button href="/">На главную &rArr;</Button>
    </Container>
  );
};
