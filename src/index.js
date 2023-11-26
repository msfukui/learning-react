import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ColorProvider from "./components/ColorProvider";
import App from "./App";

createRoot(
  document.getElementById("root")
).render(
  <StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </StrictMode>
);
