import { useEffect, useMemo, useRef, useState } from "react";
import { TaiwanDistricts } from "./TaiwanDistricts";
export default function App() {
  const list = TaiwanDistricts();

  const citySelecter = useRef();
  const districtSelecter = useRef();

  const [zip, setZip] = useState(100);

  function cityFilter() {
    let cityResult = list.find((e) => {
      return e.name == citySelecter.current.value;
    });
    setDistrictList(cityResult.districts);
  }

  useEffect(() => cityFilter, []);

  function districtFilter() {
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
      <select ref={districtSelecter} name="district" onChange={districtFilter}>
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
