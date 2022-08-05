import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FruitInfo from "./FruitInfo";

import Quote from "../assets/quote.jpg";

const HomeStyle = styled.div`
  max-width: 500px;
  margin: 10px auto;
  background: red;
  padding: 100px;
  color: #fff;
`;

const FruitWrapper = styled.div`
  width: 200px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  color: #000;
`;

const Nav = ({ brandName }) => {
  return (
    <ul>
      <li> {brandName} </li>
      <li>Home</li>
      <li>About</li>
    </ul>
  );
};

const QuoteImg = styled.img`
  height: 200px;
  display: block;
  margin: 0 auto;
`;
const show = true;

// const CustomLink = styled.Link`
//   text-decoration: none;
// `;

function Home() {
  const [fruits, setFruit] = useState([
    {
      id: 1,
      content: ["Apple", "🍎"],
    },
    {
      id: 2,
      content: ["Peach", "🍑"],
    },
    {
      id: 3,
      content: ["Mango", "🥭"],
    },
    {
      id: 4,
      content: ["Orange", "🍊"],
    },
  ]);

  const addFruit = () => {
    const fruitinfo = prompt("Enter your Fruit and logo : ");
    setFruit([
      ...fruits,
      { id: Math.ceil(Math.random() * 200), content: fruitinfo.split(" ") },
    ]);
  };

  const deleteFruit = (id) => {
    setFruit(fruits.filter((fruit) => fruit.id !== id));
  };

  document.title = "Home Page";
  return (
    <>
      <Nav brandName="Home Page" />
      {show ? <QuoteImg src={Quote} alt="Simple Quote" /> : <h1>Hey Man!</h1>}
      <HomeStyle>
        <h1>Hello React</h1>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "#fff",
            border: "2px dashed #fff",
          }}
        >
          About US
        </Link>

        <button onClick={addFruit}> ADD FRUIT</button>
        {show && (
          <FruitWrapper>
            {fruits.map((fruit) => (
              <div key={fruit.id} onDoubleClick={() => deleteFruit(fruit.id)}>
                {" "}
                {<FruitInfo fruit={fruit} />}
              </div>
            ))}
          </FruitWrapper>
        )}
      </HomeStyle>
    </>
  );
}

export { Nav };
export default Home;
