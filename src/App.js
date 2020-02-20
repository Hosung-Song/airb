import React from "react";
import "./App.css";
import Home from "./page/Home";
import Login from "./page/login/Login";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
    </>
  );
}

export default App;
