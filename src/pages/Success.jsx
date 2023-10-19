import React, { useState, useEffect } from "react";
import MyNavBar from "../components/NavBar/NavBar";
import "./Home.css";
import { useSearchParams } from "react-router-dom";

function Success() {
  const [token, setToken] = useSearchParams();

  useEffect(() => {
    const currentToken = Object.fromEntries([...token]);
    const valToken = Object.keys(currentToken)[0];
    console.log(valToken);
    localStorage.setItem("token", valToken);
  }, [token]);

  return (
    <>
      <MyNavBar />
      <div>
        <p>questa è la pagina giusta</p>
        <p className="name"></p>
        <p className="altro"></p>
        <p className="altro2"></p>
      </div>
    </>
  );
}

export default Success;
