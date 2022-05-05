import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { MyBooks } from "./pages/MyBooks";
import { Favorites } from "./pages/Favorites";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { BookPage } from "./pages/BookPage";
import { Profile } from "./pages/Profile";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-books" element={<MyBooks />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
