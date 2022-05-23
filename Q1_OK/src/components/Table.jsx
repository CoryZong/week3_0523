import React, { useState } from "react";

export default function Table() {
  const [list, setList] = useState([
    { number: 1, name: "Tris", checked: false },
    { number: 2, name: "Nono", checked: false },
    { number: 3, name: "Eric", checked: false },
    { number: 4, name: "Patrick", checked: false },
    { number: 5, name: "Yue", checked: false },
  ]);

  const [temp, setTemp] = useState(36.5);

  function handleShowInput(id) {
    let tempInput = document.querySelectorAll("input");
    const current = list.find((item) => id === item.number);
    current.checked = true;
    tempInput[id - 1].style = "display: inline-block";
  }

  function keydownHandler(e) {
    if (e.key == "Enter") {
      e.nativeEvent.path[0].style = "display: none";
      e.nativeEvent.path[1].children[0].innerText = temp;
      setList([...list]);
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
                    <div className="tempDiv">
                      <p></p>
                      <input
                        type="tel"
                        defaultValue={temp}
                        onChange={(e) =>
                          setTemp(e.target.value)
                        }
                        onKeyDown={keydownHandler}
                      />
                    </div>
                  </td>
                  <td>
                    {element.checked ? (
                      "V"
                    ) : (
                      <button
                        onClick={() =>
                          handleShowInput(element.number)
                        }>
                        簽到
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
