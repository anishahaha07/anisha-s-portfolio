// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/Projects' element={<Projects />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
