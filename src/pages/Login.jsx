import React, { useState, useEffect } from "react";
import MyNavBar from "../components/NavBar/NavBar";
import LoginForm from "../components/Login/LoginForm";

function Login() {
  const redirectHandler = () => {
    window.location.href = `${process.env.REACT_APP_URL}/auth/github`;
  };

  return (
    <>
      <MyNavBar />
      <LoginForm />
    </>
  );
}

export default Login;
