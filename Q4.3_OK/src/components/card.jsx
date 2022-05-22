import React from "react";
import {
  useChangePeopleData,
  usePeopleData,
} from "../Contexter";

export default function card() {
  const people = usePeopleData();
  const changePeople = useChangePeopleData();

  const data = {
    name: people ? "Cory" : "Mike",
    age: people ? 25 : 29,
  };

  return (
    <>
      <h1>Name : {data.name}</h1>
      <h1>Age: {data.age}</h1>
      <button onClick={changePeople}>ChangePeople</button>
    </>
  );
}
