import React from "react";
import "./LoginForm.css";
import backImg from "../../img/loginBack.jpeg";
import { Col } from "react-bootstrap";

function LoginForm() {
  return (
    <div className="formPage">
      <Col xs={12} sm={8} md={6} lg={4} xl={4} className="column">
        <div className="formArea">
          <form action="">
            <div className="titleArea">
              <span>Condividi le tue esperienze</span>
            </div>
            <div className="inputArea">
              <input type="text" placeholder="E-mail" />
            </div>
            <div className="inputArea">
              <input type="text" placeholder="Password" />
            </div>
            <button type="submit">Accedi</button>
          </form>
        </div>
      </Col>
      <div
        className="imageArea"
        style={{ backgroundImage: `url(${backImg})` }}
      ></div>
    </div>
  );
}

export default LoginForm;
