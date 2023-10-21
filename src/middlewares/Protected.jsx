import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import axios from "axios";

const isAuthorized = () => {
  const token = JSON.parse(localStorage.getItem("autorization"));
  return token;
};

export const useSession = () => {
  const validateToken = async () => {
    return await axios.post(
      `${process.env.REACT_APP_URL}/posts/verifyToken`,
      {
        sessionTokens:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const session = isAuthorized();
  const decodificato = session ? jwt_decode(session) : null;
  const navigate = useNavigate();
  useEffect(() => {
    validateToken();
    //    if (!session) {
    //      navigate("/Login");
    //    }
  }, [navigate, session]);
  return decodificato;
};

const Protected = () => {
  const isAuth = isAuthorized();

  return isAuth ? <Outlet /> : <Login />;
};

export default Protected;
