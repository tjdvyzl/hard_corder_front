import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const StartScreen = (props) => {
  const navigate = useNavigate();

  const optionTypes = [
    "datastructure",
    "algorithm",
    "network",
    "database",
    "computerarchitecture",
    "operatingsystem",
  ];
  const [currentOptionType, setCurrentOptionType] = useState("");

  const handleClick = (e) => {
    if (currentOptionType === "") alert("select option");
    else {
      navigate(`/quiz/${e.target.value}`, {
        state: { optionType: currentOptionType },
      });
    }
  };

  const onClickHandler = (e) => {
    setCurrentOptionType(e.currentTarget.value);
  };

  return (
    <div className="start-screen">
      <h2>Welcome to The hackathon Quiz!</h2>
      <h3>many question to test your general knowledge</h3>
      <h4 style={{ marginTop: "20px" }}>First, choose the test difficulty:</h4>
      <div className="game-mode" style={{ paddingBottom: "30px" }}>
        {optionTypes.map((optionType, idx) => {
          return (
            <Button
              key={idx}
              style={{ fontSize: "19px" }}
              value={optionType}
              onClick={onClickHandler}
              className={
                optionType === currentOptionType ? "selectedQoBtn" : ""
              }
            >
              {optionType}
            </Button>
          );
        })}
      </div>
      <div className="game-mode">
        <button
          className="btn2"
          value="low"
          onClick={(e) => handleClick(e)}
          style={{ backgroundColor: "#0ee32a" }}
        >
          Low
        </button>
        <button
          className="btn2"
          value="middle"
          onClick={(e) => handleClick(e)}
          style={{ backgroundColor: "#e3ce0e" }}
        >
          Middle
        </button>
        <button
          className="btn2"
          value="high"
          onClick={(e) => handleClick(e)}
          style={{ backgroundColor: "#fc2121" }}
        >
          High
        </button>
      </div>
    </div>
  );
};
