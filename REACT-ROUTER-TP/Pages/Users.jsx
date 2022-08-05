import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import photo from "../assets/photo.png";

function Users() {
  const [users, setUsers] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("http://localhost:8000/users/");
        if (!res.ok) throw new Error("No User Found");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setUsers(null);
      }
    };

    load();
  }, []);

  const applyClick = (id) => {
    const newRoute = `${location.pathname}/${id}`;
    navigate(newRoute);
  };

  return (
    <div className="container">
      {!users ? (
        <h1> No User Found</h1>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <div>
              <img src={photo} alt={`${user.id}`} />
            </div>
            <div>
              <div>
                <h3>
                  <Link to={`./${user.id}`}>{user.id}</Link>
                </h3>
                <p>
                  {`${user.firstName}  ${user.lastname}`}
                  <span>, {user.Location}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => applyClick(user.id)}
              className="btn btn-primary"
            >
              CLICKED
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Users;
