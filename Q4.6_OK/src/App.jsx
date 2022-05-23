import React, { useRef } from "react";

export default function App() {
  const petsArr = [
    { id: 1, pet: "dog" },
    { id: 2, pet: "cat" },
    { id: 3, pet: "hamster" },
    { id: 4, pet: "spider" },
    { id: 5, pet: "goldfish" },
  ];
  const selecter = useRef();
  let i = 1;
  function plus() {
    if (i == 6) {
      i = 1;
    } else {
      selecter.current.children[i].selected = true;
      i++;
    }
  }

  return (
    <div className="App">
      <select ref={selecter} name="pets">
        <option value="" selected>
          請選擇你最愛的寵物
        </option>
        {petsArr.map((e) => {
          return <option value={e.id}>{e.pet}</option>;
        })}
      </select>
      <button onClick={plus}>PlusValue</button>
    </div>
  );
}
