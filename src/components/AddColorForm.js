import React from "react";
import { useInput } from "./hooks";
import { useColors } from "./ColorProvider";

export default function AddColorFrom() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();

  const sumbit = e => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  }

  return (
    <form onSubmit={sumbit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        {...colorProps}
        type="color"
        required
      />
      <button>追加</button>
    </form>
  );
}
