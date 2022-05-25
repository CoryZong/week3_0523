import React, { useState } from "react";
import RandomComponent from "./RandomComponent";

const DivComponent = React.memo(() => {
  const randomArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  const [divColor, setDivColor] = useState([
    { id: 0, color: "", lock: true },
    { id: 1, color: "", lock: true },
    { id: 2, color: "", lock: true },
    { id: 3, color: "", lock: true },
    { id: 4, color: "", lock: true },
  ]);
  const changeColor = (id) => {
    if (divColor[id].lock) {
      let colorStr = "";
      for (let i = 0; i < 6; i++) {
        colorStr += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
      }
      divColor[id].color = `#${colorStr}`;
      setDivColor([...divColor]);
    }
  };
  function buttonHandler(id) {
    let current = divColor.find((e) => e.id == id);
    current.lock = !current.lock;
    setDivColor([...divColor]);
  }
  function allChangeColor() {
    for (let i = 0; i < divColor.length; i++) {
      if (divColor[i].lock) {
        let colorStr = "";
        for (let i = 0; i < 6; i++) {
          colorStr += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
        }
        divColor[i].color = `#${colorStr}`;
      }
    }
    setDivColor([...divColor]);
  }
  return (
    <>
      <div className="container">
        {Array.isArray(divColor) &&
          divColor.map((e) => {
            return (
              <div key={e.id} className="color" onClick={() => changeColor(e.id)} style={{ backgroundColor: e.color }}>
                <RandomComponent />
                <button onClick={() => buttonHandler(e.id)}>
                  <i className={e.lock ? "fa-solid fa-lock-open" : "fa-solid fa-lock"}></i>
                </button>
              </div>
            );
          })}
      </div>
      <button className="update" onClick={allChangeColor}>
        更新
      </button>
    </>
  );
}, false);

export default DivComponent;
