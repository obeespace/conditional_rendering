import React from "react";
import { useState } from "react";
import Form from "./Form";

function App(props) {
  var [userIsRegistered, setReg] = useState(true);
  function twick() {
    setReg(function (prev) {
      return !prev;
    });
  }
  return (
    <div className="container">
      <Form isTrue={userIsRegistered} isfalse={twick} />
    </div>
  );
}

export default App;
