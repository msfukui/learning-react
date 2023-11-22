import React, { useState } from "react";
import colorData from "../data/color.json";
import ColorList from "./components/ColorList.js";

export default function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <ColorList
      colors={colors}
      onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }}
    />
  );
}
