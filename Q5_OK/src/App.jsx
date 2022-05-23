import { useEffect, useRef, useState } from "react";
import { TaiwanDistructs } from "./TaiwanDistructs";
export default function App() {
  const list = TaiwanDistructs();

  const citySelecter = useRef();
  const districtSelecter = useRef();

  const [districtList, setDistrictList] = useState([]);
  const [zip, setZip] = useState(100);

  function cityFilter() {
    let cityResult = list.find((e) => {
      return e.name == citySelecter.current.value;
    });
    setDistrictList(cityResult.districts);
  }

  useEffect(() => cityFilter, []);

  function test() {
    let zipResult = districtList.find((e) => {
      return e.name == districtSelecter.current.value;
    });
    setZip(zipResult.zip);
  }

  return (
    <div className="App">
      <select ref={citySelecter} name="city" onChange={cityFilter}>
        {list.map((e, index) => {
          return (
            <option key={index} value={e.name}>
              {e.name}
            </option>
          );
        })}
      </select>
      <select ref={districtSelecter} name="district" onChange={test}>
        {districtList.map((e, index) => {
          return (
            <option key={index} value={e.name}>
              {e.name}
            </option>
          );
        })}
      </select>
      {zip}
    </div>
  );
}
// import { useEffect, useRef, useState } from "react";
// import { TaiwanDistructs } from "./TaiwanDistructs";
// export default function App() {
//   const list = TaiwanDistructs();

//   const citySelecter = useRef();
//   const districtSelecter = useRef();

//   const [districtList, setDistrictList] = useState([]);
//   const [zip, setZip] = useState("");

//   function filter() {
//     let cityResult = list.find((e) => {
//       return e.name == citySelecter.current.value;
//     });
//     setDistrictList(cityResult.districts);
//   }

//   useEffect(() => filter, []);

//   function test() {
//     let zipResult = districtList.find((e) => {
//       return e.name == districtSelecter.current.value;
//     });
//     setZip(zipResult.zip);
//   }

//   return (
//     <div className="App">
//       <select ref={citySelecter} name="city">
//         {list.map((e, index) => {
//           return (
//             <option key={index} value={e.name}>
//               {e.name}
//             </option>
//           );
//         })}
//       </select>
//       <select ref={districtSelecter} name="district">
//         {districtList.map((e, index) => {
//           return (
//             <option key={index} value={e.name}>
//               {e.name}
//             </option>
//           );
//         })}
//       </select>
//       <button onClick={test}>test</button>
//       <p>{zip}</p>
//     </div>
//   );
// }
