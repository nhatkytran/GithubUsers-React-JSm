import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Dashboard from "./components/Dashborad";
import Login from "./components/Login";
import RouterError from "./components/RouterError";
import AuthWrapper from "./components/AuthAWrapper";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <AuthWrapper>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Dashboard />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<RouterError />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
