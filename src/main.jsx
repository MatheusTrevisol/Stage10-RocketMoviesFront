import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles  from "./styles/global";

import { ThemeProvider } from "styled-components";
import themes from "./styles/theme";

import { AuthProvider } from "./hooks/auth";

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);