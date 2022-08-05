import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="container">
      <h1> Service Section</h1>
      <div>
        <p>Our Services: </p>
        <div>
          <Link to="./mobile">Mobile Dev</Link>
          <span>
            😁 👉 <Link to="./mobile/Java">Java</Link>{" "}
          </span>
        </div>
        <div>
          <Link to="./web">Web Dev</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Services;
