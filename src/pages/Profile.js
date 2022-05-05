import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Profile = (props) => {
  const [isloaded, setLoaded] = useState(false);

  let profile_data = ""; // пока не придумал для чего оно тут

  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!isloaded) {
      fetch("http://localhost:5000/profile_data", {
        method: "post",
      })
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
          setUserName(data.name);
        });

      setLoaded(true);
    }
    return () => {};
  }, []);

  // выход из аккаунта
  const handleOnExit = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/unlogin", {
      method: "post",
      body: "",
      headers: {
        "Content-Type": "application/json",
      },
    });

    result.text().then(function (result_text) {
      if (result_text === "user_not_login") {
        alert("User not login!");
      } else if (result_text === "user_unlogin") {
        navigate("/login");
      } else {
        alert("Response:" + result_text);
      }
    });
  };

  return (
    <>
      <Container>
        <Form.Text id="textName" className="text-muted">
          {userName ? `Ваш логин: ${userName}` : "Вы не авторизованы"}
        </Form.Text>
        <br />
        {userName ? (
          <>
            <Button href="/login" onClick={handleOnExit}>
              Выйти
            </Button>
            <h3>Мои книги</h3>
            <h3>Предпочтения в жанрах</h3>
          </>
        ) : (
          <a href="/login">Войти</a>
        )}
      </Container>
    </>
  );
};
