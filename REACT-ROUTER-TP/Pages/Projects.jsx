import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const ReactBox = () => {
  return <h2> Amazing tool to Power the Front End</h2>;
};

const NodeBox = () => {
  return <h2> Amazing tool to Power the Back End</h2>;
};

const Projects = () => {
  return (
    <div className="container">
      <h1>Projects</h1>
      <div>
        <Link to="react">React</Link>
        <span
          style={{
            display: "inline-block",
            width: 20,
            height: 20,
            backgroundColor: "#e239d0",
            margin: "0 10px",
            borderRadius: "10px",
          }}
        ></span>
        <Link to="node">Node.js</Link>
      </div>
      <Routes>
        <Route path="react" element={<ReactBox />} />
        <Route path="node" element={<NodeBox />} />
      </Routes>
    </div>
  );
};

export default Projects;
