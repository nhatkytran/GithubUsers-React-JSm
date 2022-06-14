import { Link } from "react-router-dom";

function RouterError() {
  return (
    <div>
      <h1>Error: Page not found</h1>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default RouterError;
