import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Electronics from "./Components/Electronics/Electronics"
import Jewellery from "./Components/Jewellery/Jewellery"
import Mens from "./Components/Men's clothing/Men-clothing"
import Sign_Up from "./Components/Sign_up/Sign_up"
import Login from "./Components/Login/Login"
import Cart from "./Components/Cart/Cart"
import {BrowserRouter} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Electronics" element={<Electronics />}></Route>
      <Route path="/Jewellery" element={<Jewellery />}></Route>
      <Route path="/men's clothing" element={<Mens />}></Route>
      <Route path="/Sign_up" element={<Sign_Up />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>

);


reportWebVitals();
