import React, { Component, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const onEmailChangeHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPwChangeHandler = (e) => {
    setPw(e.currentTarget.value);
  };

  const submitHandler = (e) => {
    try {
      const response = axios({
        url: "http://192.168.211.189:8090/api/members/login",
        method: "post",
        data: {
          email: `${email}`,
          password: `${pw}`,
          point: 0,
          count: 0,
        },
      });

      if (response) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("id", email);
        console.log(response);
        navigate("/");
        window.location.replace("/");
      } else {
        console.log("로그인 실패");
      }
    } catch (error) {
      console.error("에러 발생", error);
    }
  };

  return (
    <form onSubmit={submitHandler} className="sign-form">
      <h3 className="sign-title">Sign In</h3>
      <div className="sign-formGroup">
        <label htmlFor="text" className="sign-label">
          Email address
        </label>
        <input
          type="text"
          className="sign-input"
          id="email"
          name="email"
          placeholder="Enter email"
          required
          onChange={onEmailChangeHandler}
        />
      </div>
      <div className="sign-formGroup">
        <label htmlFor="password" className="sign-label">
          Password
        </label>
        <input
          type="password"
          className="sign-input"
          id="password"
          name="password"
          placeholder="Enter password"
          required
          onChange={onPwChangeHandler}
        />
      </div>
      <div className="sign-formGroup">
        <button type="submit" className="sign-button">
          Login
        </button>
      </div>
      <p className="sign-last">
        <a href="/signUp">sign up</a>
      </p>
    </form>
  );
}
