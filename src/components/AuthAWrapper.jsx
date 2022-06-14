import { useAuth0 } from "@auth0/auth0-react";

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <div className="App">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <h3 style={{ color: "red" }}>Error!</h3>
      </div>
    );
  }

  return children;
}

export default AuthWrapper;
