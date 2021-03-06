import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginWithRedirect}>Login / Signup</button>
    </div>
  );
}

export default Login;
