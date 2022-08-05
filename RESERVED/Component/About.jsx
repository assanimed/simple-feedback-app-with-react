import React from "react";

import { Link } from "react-router-dom";

import { Nav } from "./Home";

function About() {
  document.title = "About Page";
  return (
    <div>
      <Nav brandName="About Page" />
      <h1>Welcome to About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At fugit
        aspernatur repellendus nemo amet illo atque eveniet dicta, voluptates
        repellat officiis ratione molestiae odit corporis ipsam esse quo?
        Voluptate, dolorum.
      </p>

      <Link to="/"> Back 👈 </Link>
    </div>
  );
}

export default About;
