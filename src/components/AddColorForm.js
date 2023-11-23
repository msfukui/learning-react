import React, { useRef } from "react";

export default function AddColorFrom({ onNewColor = f => f }) {
  const txtTitle = useRef();
  const hexColor = useRef();

  const sumbit = e => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    onNewColor(title, color);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  }

  return (
    <form onSubmit={sumbit}>
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
      <button>追加</button>
    </form>
  );
}
