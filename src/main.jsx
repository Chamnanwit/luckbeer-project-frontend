import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./contexts/Auth-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
