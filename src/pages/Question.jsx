import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Progress } from "../components/Progress";
import { Next } from "../components/Next";
import axios from "axios";

export const Question = () => {
  const [gameMode, setGameMode] = useState("");
  const [status, setStatus] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [options, setOptions] = useState("");
  const [isCorrected, setIsCorrected] = useState(false);
  const [score, setScore] = useState(0);
  const level = useParams().level;
  const styleCat = {
    backgroundColor: level === "medium" ? "#e3ce0e" : "#fc2121",
  };

  const getQuesition = () => {
    let res = axios({
      method: "post",
      url: "http://192.168.211.189:8090/api/quiz",
      data: {
        type: "datastructure",
        level: "high",
      },
    })
      .then((response) => {
        setAnswer((parseInt(response.data.answer) - 1).toString());
        setCurrentQuestion(response.data.question);
        setOptions(response.data.options);
        setStatus("ready");
        let new_array = response.data.options.split("!");
        setOptions(new_array);
        console.log(response);
      })
      .catch((error) => {
        setStatus("error");
        console.error(error);
      });
    return res;
  };

  useEffect(() => {
    console.log(score);
    getQuesition();
  }, []);

  const onClickHandler = (e) => {
    if (e.currentTarget.value === answer) {
      setScore(score + 1);
      setIsCorrected(true);
    }
  };

  const nextQuestion = () => {
    setIsCorrected(false);
    getQuesition();
  };

  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <ErrorMessage />}
      {status === "ready" && (
        <>
          <Progress />
          <div className="question-cont">
            <div className="category" style={level !== "easy" ? styleCat : {}}>
              {level} quiz
            </div>
            <h4>{currentQuestion}</h4>
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
          <footer>{answer && <Next nextQuestion={nextQuestion} />}</footer>
        </>
      )}
    </main>
  );
};
