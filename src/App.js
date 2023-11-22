import React, { useState } from "react";
import colorData from "../data/color.json";
import ColorList from "./components/ColorList.js";

export default function App() {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
}
