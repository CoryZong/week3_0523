import React from "react";
import Dashboard from "./dashboard";
import { Contexter } from "../Contexter";

export default function Home() {
  return (
    <Contexter>
      <Dashboard />
    </Contexter>
  );
}
