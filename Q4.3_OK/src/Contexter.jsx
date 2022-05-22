import React, { useState, useContext } from "react";

export const PeopleContext = React.createContext();
export const ChangePeople = React.createContext();

export function usePeopleData() {
  return useContext(PeopleContext);
}

export function useChangePeopleData() {
  return useContext(ChangePeople);
}

export function Contexter({ children }) {
  const [people, setProple] = useState(true);

  function changePeople() {
    setProple((pre) => !pre);
  }

  return (
    <PeopleContext.Provider value={people}>
      <ChangePeople.Provider value={changePeople}>
        {children}
      </ChangePeople.Provider>
    </PeopleContext.Provider>
  );
}
