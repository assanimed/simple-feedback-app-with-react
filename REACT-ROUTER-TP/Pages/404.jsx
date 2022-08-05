import styled from "styled-components";

import { useLocation } from "react-router-dom";

const ErrRep = styled.span`
  font: bold 7rem "sans-serif";
  position: absolute;
  animation: show 0.5s linear;

  @keyframes show {
    from {
      transform: scale(0.2, 0.2);
    }

    50% {
      transform: scale(1.5, 1.5);
    }

    to {
      transform: scale(1, 1);
    }
  } ;
`;

function NotFound() {
  const location = useLocation();

  return (
    <div className="container">
      <h1>No Resource FOUND ... at 👉 {location.pathname}</h1>
      <div style={{ position: "relative" }}>
        <ErrRep>404</ErrRep>
      </div>
    </div>
  );
}

export default NotFound;
