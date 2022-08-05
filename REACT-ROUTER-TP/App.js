import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import FAQ from "./Pages/FAQ";
import NotFound from "./Pages/404";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

import Nav from "./Component/Nav";
import MobileDev from "./Pages/servs/MobileDev";
import WebDev from "./Pages/servs/WebDev";
import Success from "./Pages/Success";
import Users from "./Pages/Users";
import User from "./Component/User";

import Projects from "./Pages/Projects";

const JavaDev = ({ st }) => {
  if (st) console.log("woow ->", st);
  return <h2>Java Fro Mobile Development</h2>;
};

function App() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/FAQ/" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success/:subject" strict element={<Success />} />
        <Route path="/Services" element={<Services />}>
          <Route path="mobile" element={<MobileDev />}>
            <Route path="java" element={<JavaDev st={true} />} />
          </Route>
          <Route path="web" element={<WebDev />} />
        </Route>
        <Route
          path="/users/:id"
          element={(() => {
            const query = location.pathname.split("/")[2];
            return (
              <>
                <User query={query} />
              </>
            );
          })()}
        />
        <Route path="/users" element={<Users />} />
        <Route path="/projects/*" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
