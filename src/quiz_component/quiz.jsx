import React, { useState, useEffect } from "react";
import app from "../base";
import Progress from "./Progress";
import Question from "./Question";
import Answers from "./Answers";

const Quiz = () => {
  let [userData, setUserData] = useState([]);

  // getting the UserDetails from the database

  useEffect(() => {
    const fetchUserData = async () => {
      const db = app.firestore();
      const data = await db.collection("user_details").get();

      setUserData(data.docs.map((doc) => doc.data()));
    };
    fetchUserData();
  }, []);

  //   console.log(userData);

  // getting the questions from the database

  let [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestionData = async () => {
      const questionDB = app.firestore();
      const questionData = await questionDB.collection("Questions").get();
      setQuestions(questionData.docs.map((doc) => doc.data()));
    };
    fetchQuestionData();
  }, []);

  //   console.log(questions);

  let questionsArray = questions.map((question) => question);

  //   console.log(questionsArray);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const question = questionsArray[currentQuestion];

  //   function to handle the selected answer

  const handleClick = (e) => {
    setCurrentAnswer(e.target.value);
  };

  console.log(currentAnswer);

  //  ##########################  keeping track of number of attempts of user

  const [count, setCount] = useState(1);

  //   console.log(count);

  if (count > 3) {
    return (
      <div className="container">
        {/* <h3>Sorry {props.currentUser}</h3> */}
        <h2>Sorry Your Chances are over</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <Progress total="3" current="1" />
      <Question questions={questionsArray} />
      <Answers
        question={question}
        currentAnswer={currentAnswer}
        handleClick={handleClick}
      />
      <button className="btn btn-primary">Confirm and Continue</button>

      <button
        className="btn btn-primary"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Try again
      </button>
      <button className="btn btn-primary" onClick={() => app.auth().signOut()}>
        Sign out
      </button>
    </div>
  );
};
export default Quiz;
