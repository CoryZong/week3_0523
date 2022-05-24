import React, { useState } from "react";

export default function Table() {
  const [list, setList] = useState([
    { number: 1, name: "Tris", checked: false, temp: "" },
    { number: 2, name: "Nono", checked: false, temp: "" },
    { number: 3, name: "Eric", checked: false, temp: "" },
    { number: 4, name: "Patrick", checked: false, temp: "" },
    { number: 5, name: "Yue", checked: false, temp: "" },
  ]);
  const [isEdit, setEdit] = useState(null);
  const [temp, setTemp] = useState(36.5);

  function handleShowInput(id) {
    setEdit(id);
    setTemp(36.5);
  }

  function keydownHandler(e, number) {
    if (e.key == "Enter") {
      const array = list.map((item) => {
        if (item.number === number) {
          item.temp = temp;
          item.checked = true;
        }
        return item;
      });
      setList(array);
      setEdit(null);
    }
  }

  return (
    <div className="table">
      <div className="container">
        <h1>員工打卡系統</h1>
        <table>
          <thead>
            <tr>
              <th>員工編號</th>
              <th>員工姓名</th>
              <th className="temp">體溫</th>
              <th>是否簽到</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(list) &&
              list.map((element) => (
                <tr key={element.number}>
                  <td>{element.number}</td>
                  <td>{element.name}</td>
                  <td>
                    <div className="tempDiv">{isEdit !== element.number ? <p>{element.temp}</p> : <input type="tel" defaultValue={temp} onChange={(e) => setTemp(e.target.value)} onKeyDown={(e) => keydownHandler(e, element.number)} />}</div>
                  </td>
                  <td>{element.checked ? "V" : <button onClick={() => handleShowInput(element.number)}>簽到</button>}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
