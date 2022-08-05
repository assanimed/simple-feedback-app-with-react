import { Navigate } from "react-router-dom";

function FAQ() {
  const go = false;

  return (
    <div className="container">
      <h1> [THIS IS FAQ Page] </h1>
      {go && <Navigate to="/" replace={true} />}
    </div>
  );
}

export default FAQ;
