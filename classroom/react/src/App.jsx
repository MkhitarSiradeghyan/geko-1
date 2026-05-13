import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Menu from "./pages/Menu/Menu";
import NotFound from "./pages/NotFound/NotFound";
import Details from "./pages/Details/Details";
import ProductList from "./pages/ProductsList/ProductList";

const App = () => {
  const [gumar, setGumar] = useState(0);
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/products/:id" element={<Details/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
