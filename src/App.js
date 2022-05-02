import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { MyBooks } from "./MyBooks";
import { Favorites } from "./Favorites";
import { Login } from "./Login";
import { Registration } from "./Registration";
import { BookPage } from "./BookPage";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/my-books" component={MyBooks} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/book" component={BookPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
