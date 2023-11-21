import React from "react";
import { createRoot } from "react-dom/client";
import data from "../data/recipes.json";
import Menu from "./components/Menu";

createRoot(
  document.getElementById("root")
).render(
  <Menu recipes={data} />
);
