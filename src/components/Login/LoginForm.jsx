import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="formArea">
      <form action="">
        <div className="titleArea">
          <span>Accedi</span>
        </div>
        <div>
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Password" />
        </div>
        <div>
          <button type="submit">Accedi</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
