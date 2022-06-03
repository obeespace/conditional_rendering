import React from "react";

function Form(props) {
  function signup() {
    return props.isfalse();
  }
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isTrue && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <p onClick={signup}>{props.isTrue === false ? "Login" : "Sign Up"}</p>
      <button type="submit">{props.isTrue ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
