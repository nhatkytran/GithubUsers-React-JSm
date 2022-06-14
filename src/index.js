import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GithubContextProvider from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-65m8tll3.us.auth0.com
// lf2OGIG3jg80DjHOPosveyr8O04K6Xwf

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-65m8tll3.us.auth0.com"
      clientId="lf2OGIG3jg80DjHOPosveyr8O04K6Xwf"
      redirectUri={window.location.origin}
    >
      <GithubContextProvider>
        <App />
      </GithubContextProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
