import photo from "../assets/photo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function User({ query }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`http://localhost:8000/users/${query}`);
        setLoading(false);
        if (!res.ok) throw new Error("No User Found");
        const data = await res.json();
        setUser(data);
      } catch {}
    };

    load();
  }, [query]);

  if (loading) return <h1>Loading....</h1>;
  if (!user) return <h1> No User Found</h1>;

  return (
    <>
      <div className="container" key={user.id}>
        <Link className="btn btn-danger" to="/users">
          Back
        </Link>
        <div>
          <img src={photo} alt={`${user.id}`} />
        </div>
        <div>
          <div>
            <h3>{user.id}</h3>
            <p>
              {" "}
              {`${user.firstName}  ${user.lastname}`}{" "}
              <span>, {user.Location}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
