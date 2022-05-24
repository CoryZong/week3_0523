import React from "react";
import Count from "./Count";

export default function App() {
  const [text, setText] = React.useState("");

  return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Count />
    </div>
  );
}
