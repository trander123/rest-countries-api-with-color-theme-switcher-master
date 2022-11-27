import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountryContextProvider } from "./context/CountryContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CountryContextProvider>
      <App />
    </CountryContextProvider>
  </React.StrictMode>
);
