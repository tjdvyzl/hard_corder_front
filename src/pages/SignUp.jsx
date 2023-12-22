import React, { Component, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    try {
      const repsonse = axios({
        url: "http://192.168.211.189:8090/api/members",
        method: "post",
        data: {
          email: `${email}`,
          password: `${pw}`,
          point: 0,
          count: 0,
        },
      });

      if (response) {
        navigate("/");
        window.location.replace("/");
      } else {
        console.log("회원가입 실패");
      }
    } catch (error) {
      console.error("에러 발생", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sign-form">
      <h3 className="sign-title">Sign Up</h3>

      <div className="sign-formGroup">
        <label className="sign-label">Email address</label>
        <input
          type="text"
          className="sign-input"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="sign-formGroup">
        <label className="sign-label">Password</label>
        <input
          type="password"
          className="sign-input"
          placeholder="Enter password"
          required
        />
      </div>
      <div className="sign-formGroup">
        <button type="submit" className="sign-button">
          Sign Up
        </button>
      </div>
      <p className="sign-last">
        Already registered <a href="/signIn">sign in?</a>
      </p>
    </form>
  );
}
