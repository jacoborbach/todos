import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Todos from "./Components/Todos/Todos";

export default (
  <Routes>
    <Route exact path="/" element={<Landing />} />
    <Route path="/todos" element={<Todos />} />
  </Routes>
);
