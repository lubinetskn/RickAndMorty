import React from "react";
import ReactDOM from "react-dom/client";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { rickandmortyapi } from "service/rickandmorty";
import theme from "config/theme";

import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={rickandmortyapi}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ApiProvider>
  </React.StrictMode>
);
