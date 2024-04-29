import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import FormValuesProvider from "./context/FormValuesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FormValuesProvider>
        <App />
      </FormValuesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
