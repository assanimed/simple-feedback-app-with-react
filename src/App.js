import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Card from "./Components/Shared/Card";
import FeedbacksData from "./data/feedbackData";

import { FeedBackProvider } from "./context/FeedBackContext";

function App() {
  return (
    <FeedBackProvider>
      <Header />
      <Card>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          About
        </NavLink>
      </Card>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
      </Routes>
    </FeedBackProvider>
  );
}

export default App;
