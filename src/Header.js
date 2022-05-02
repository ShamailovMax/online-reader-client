import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

// шапка приложения, отображает боковое меню для навигации
export const Header = () => {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">
              Веб-сервис поиска и просмотра информационных материалов
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Навигация
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Каталог</Nav.Link>
                  <Nav.Link href="/my-books">
                    Мои информационные материалы
                  </Nav.Link>
                  <Nav.Link href="/favorites">Список желаемого</Nav.Link>
                  <Nav.Link href="/login">Войти</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
