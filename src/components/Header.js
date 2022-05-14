import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Dropdown,
  NavDropdown,
} from "react-bootstrap";

// шапка приложения, отображает боковое меню для навигации
export const Header = () => {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3"
          sticky="top"
        >
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
                  <Nav.Link href="/profile">Мой профиль</Nav.Link>
                  <Nav.Link href="/">Каталог</Nav.Link>
                  <Nav.Link href="/about">Информация</Nav.Link>
                  <Nav.Link href="/my-books">
                    Мои информационные материалы
                  </Nav.Link>
                  <NavDropdown
                    id="nav-dropdown-light-example"
                    title="Категории"
                    menuVariant="light"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Научная литература
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Художественная литература
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Короткие рассказы
                    </NavDropdown.Item>
                  </NavDropdown>
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
