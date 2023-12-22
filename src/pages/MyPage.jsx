import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../components/Header";

const MyPage = () => {
  // 사용자 정보 상태 설정 (예: 사용자 이름과 이메일)
  const [userEmail, setUserEmail] = useState("");
  const [userCount, setUserCount] = useState("");
  const [userPoint, setUserPoint] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    try {
      const response = axios
        .get("http://192.168.211.189:8090/api/members/info/1")
        .then((response) => {
          console.log(response);
          setUserEmail(response.data.email);
          setUserCount(response.data.count);
          setUserPoint(response.data.point);
          setUserId(response.data.id);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }, []);

  return (
    <div className="mypage">
      <h1>My Page</h1>
      <hr></hr>
      <br></br>
      <br></br>
      <div className="memberInfo">
        <strong>Email :</strong> {userEmail}
      </div>
      <br></br>
      <div className="memberInfo">
        <strong>내가 푼 문제 수 :</strong> {userCount}
      </div>
      <br></br>
      <div className="memberInfo">
        <strong>보유 포인트 :</strong> {userPoint}
      </div>
    </div>
  );
};

export default MyPage;
