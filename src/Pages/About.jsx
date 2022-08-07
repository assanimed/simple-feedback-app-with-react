import Card from "../Components/Shared/Card";
import { Link, Routes, Route, Navigate, useNavigate } from "react-router-dom";

function About() {
  const status = 404;
  const navigate = useNavigate();
  const goHome = () => {
    if (status === 404) navigate("./privacy");
  };

  return (
    <div className="container">
      <Card>
        <h1> About</h1>
        <p>THis is a Review APp </p>
        <p>Version: 6.2.20</p>
        <button className="btn btn-primary" onClick={goHome}>
          GO HOME
        </button>
        <p>
          <Link to="/" className="back">
            Back
          </Link>
        </p>
      </Card>
      <Routes>
        <Route path="/privacy" element={<h1>Privacy Policy</h1>} />
      </Routes>
    </div>
  );
}

export default About;
