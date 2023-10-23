import React, { useState, useEffect } from "react";
import MyNavBar from "../components/NavBar/NavBar";
import "./Home.css";
import { useSearchParams, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Success() {
  const { token } = useParams();
  console.log(jwt_decode(token));

  useEffect(() => {
    localStorage.setItem("token", token);
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
