import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth0();

  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <img
            src={(isAuthenticated && user.picture) || ""}
            alt="..."
            className="navbar-image"
          />
          <span className="navbar-user-name">
            <b>{(isAuthenticated && user.name) || "John-Smilga"}</b>
          </span>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <hr style={{ marginBottom: "20px" }} />
    </>
  );
}

export default Navbar;
