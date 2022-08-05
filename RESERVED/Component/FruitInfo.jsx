import styled from "styled-components";

const FruitWrap = styled.div`
  width: 100%;
  padding: 5px 0;
  display: flex;
  justify-content: space-evenly;
  transition: all 0.1s linear;
  border-radius: 3px;
  font-family: "Monolisa";
  :hover {
    color: red;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
  }
`;

function FruitInfo({ fruit: { content } }) {
  return (
    <FruitWrap>
      <div> {content[0]}</div>
      <div style={{ color: "purple" }}> {content[1]}</div>
    </FruitWrap>
  );
}

export default FruitInfo;
