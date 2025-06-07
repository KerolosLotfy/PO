import React from "react"
import './App.css';
import { Header } from "./Components/Header";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";


export default function App ()  {
  return (
    <Router basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
    </Router>
  )
}