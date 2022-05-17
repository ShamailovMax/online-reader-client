import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { BookPage } from "./pages/BookPage";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";
import { Categories } from "./pages/Categories";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FreeCategoryPage } from "./pages/FreeCategoryPage";
import {ScienceCategoryPage} from "./pages/ScienceCategoryPage";
import { AddBookForm } from "./pages/AddBookForm/AddBookForm";
import { Slider } from "./components/Slider/Slider";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/free" element={<FreeCategoryPage />} />
          <Route path="/categories/science" element={<ScienceCategoryPage />} />
          <Route path='/publicate' element={<AddBookForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
