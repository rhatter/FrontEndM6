import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Error from "./pages/Error";
import Success from "./pages/Success";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Protected from "./middlewares/Protected";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/book/:bookId" element={<Details />} />

        <Route path="/success" element={<Success />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />

        <Route element={<Protected />}>
          <Route path="/book/user/:bookId" element={<UserDetail />}></Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
