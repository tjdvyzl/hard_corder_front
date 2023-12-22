import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Next } from "../components/Next";
import axios from "axios";
import Button from "react-bootstrap/Button";

export const Question = () => {
  const [gameMode, setGameMode] = useState("");
  const [status, setStatus] = useState("loading");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [options, setOptions] = useState("");
  const [isCorrected, setIsCorrected] = useState(false);
  const [score, setScore] = useState(0);
  const level = useParams().level;
  const styleCat = {
    backgroundColor: level === "middle" ? "#e3ce0e" : "#fc2121",
  };
  const location = useLocation();
  const selectedOptionType = location.state?.optionType;
  const [gptQuestion, setGptQuestion] = useState("");
  const getQuestion = () => {
    let res = axios({
      method: "post",
      url: "http://192.168.211.189:8090/api/quiz",
      data: {
        type: `${selectedOptionType}`,
        level: `${level}`,
      },
    })
      .then((response) => {
        setAnswer((parseInt(response.data.answer) - 1).toString());
        setCurrentQuestion(response.data.question);
        setOptions(response.data.options);
        setStatus("ready");
        let new_array = response.data.options.split("!");
        setOptions(new_array);
      })
      .catch((error) => {
        setStatus("error");
        console.error(error);
      });
    return res;
  };

  useEffect(() => {
    console.log(selectedOptionType);
    console.log(score);
    getQuestion();
  }, []);

  const onClickHandler = (e) => {
    if (e.currentTarget.value === answer) {
      setScore(score + 1);
      setIsCorrected(true);
    }
  };

  const nextQuestion = () => {
    setIsCorrected(false);
    getQuestion();
  };

  const optionTypeHandler = (e) => {};

  const textAreaChangeHandler = (e) => {
    setGptQuestion(e.currentTarget.value);
    console.log(gptQuestion);
  };

  const searchBtnHandler = (e) => {
    e.preventDefault();
    let res = axios({
      url: "http://192.168.211.189:8090/api/gpt",
      method: "post",
      data: {
        type: `${selectedOptionType}`,
        content: `${gptQuestion}`,
      },
    })
      .then((response) => {
        let res = response.data;
        alert(res.content);
      })
      .catch((error) => {
        alert("data error");
      });
  };

  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <ErrorMessage />}
      {status === "ready" && (
        <>
          <div className="question-cont">
            <div className="category" style={level !== "low" ? styleCat : {}}>
              {level} quiz
            </div>
            <h4 style={{ padding: "30px" }}>{currentQuestion}</h4>
            <div className="options">
              {options.map((option, idx) => {
                return (
                  <button
                    key={idx}
                    className={`btn btn-option ${
                      isCorrected && idx == answer ? "answer" : ""
                    }`}
                    disabled={isCorrected}
                    onClick={onClickHandler}
                    value={idx}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
          <footer style={{ marginBottom: "17px" }}>
            {answer && (
              <Next
                nextQuestion={nextQuestion}
                score={score}
                level={level}
                gameMode={selectedOptionType}
              />
            )}
          </footer>
          <div className="footerContainer">
            <textarea
              style={{ width: "450px", height: "7em", fontSize: "20px" }}
              placeholder="질문을 해보세요"
              onChange={textAreaChangeHandler}
            />
            <Button
              variant="primary"
              onClick={searchBtnHandler}
              style={{
                margin: "10px 5px",
                width: "7em",
                height: "6em",
                fontSize: "2em",
              }}
            >
              Ask To AI
            </Button>
          </div>
        </>
      )}
    </main>
  );
};
