import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../Button/Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veritatis corporis
          distinctio molestias ea minus.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
