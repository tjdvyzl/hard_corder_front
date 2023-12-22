import React from "react";
import { useNavigate } from "react-router-dom";

export const Next = (props) => {
  const navigate = useNavigate();

  const handleNext = () => {
    props.nextQuestion();
  };

  const handleFinish = () => {
    navigate("/results");
  };

  return (
    <div>
      <button className="btn btn-ui" onClick={handleNext}>
        Next
      </button>

      <button className="btn btn-ui" onClick={handleFinish}>
        Finish
      </button>
    </div>
  );
};
