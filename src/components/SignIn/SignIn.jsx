import React from "react";
import "./SignIn.css";
import backImg from "../../img/signin.jpg";
import { Col } from "react-bootstrap";

function SignIn() {
  return (
    <div className="formPage">
      <Col xs={12} sm={8} md={6} lg={4} xl={4} className="column">
        <div className="preFormArea">
          <div></div>
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
          <button className="registrati">Registrati</button>
        </div>
      </Col>
      <div
        className="imageArea"
        style={{ backgroundImage: `url(${backImg})` }}
      ></div>
    </div>
  );
}

export default SignIn;
