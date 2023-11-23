import React, { useState } from "react";

export default function AddColorFrom({ onNewColor = f => f }) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const sumbit = e => {
    e.preventDefault();
    onNewColor(title, color);
    setTitle("");
    setColor("#000000");
  }

  return (
    <form onSubmit={sumbit}>
      <input
        value={title}
        onChange={event => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        value={color}
        onChange={event => setColor(event.target.value)}
        type="color"
        required
      />
      <button>追加</button>
    </form>
  );
}
