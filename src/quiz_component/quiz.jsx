import React, { useState, useEffect } from "react";
import app from "../base";
import Progress from "./Progress";
import Question from "./Question";
import Answers from "./Answers";

const Quiz = () => {
  let [userData, setUserData] = useState([]);

  //   console.log(userData);
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
  const [userAnswers, setUserAnswers] = useState([]);
  const [error, setError] = useState("");
  const [showResult, setShowResults] = useState(false);
  //   const [counter, setCounter] = useState(0);

  //   console.log(counter);

  //   console.log(userAnswers);
  //   console.log(currentAnswer);

  const question = questionsArray[currentQuestion];

  //   console.log(question);

  //   function to handle the selected answer

  const handleClick = (e) => {
    setCurrentAnswer(e.target.value);
    setError("");
  };

  const next = () => {
    const answer = { questionId: question.id, answer: currentAnswer };

    if (!currentAnswer) {
      setError("please select an option");
      return;
    }

    userAnswers.push(answer);
    setUserAnswers(userAnswers);
    setCurrentAnswer("");

    if (currentQuestion + 1 < questionsArray.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }
    setShowResults(true);
  };

  //   rendering the error if user skips an question

  const renderError = () => {
    if (!error) {
      return;
    }
    return <div className="error">{error}</div>;
  };

  //   checking whether user got the correct answers and displaying them

  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className="correct">Correct</span>;
    }
    return <span className="failed">Failed</span>;
  };

  const renderResultsData = () => {
    return userAnswers.map((answer) => {
      const question = questionsArray.find(
        (question) => question.id === answer.questionId
      );
      return (
        <div key={question.id}>
          {question.question}-{renderResultMark(question, answer)}
        </div>
      );
    });
  };

  // restarting the quiz

  const restart = () => {
    setUserAnswers([]);
    setCurrentAnswer("");
    setCurrentQuestion(0);
    setShowResults(false);
  };

  //  ##########################  keeping track of number of attempts of user

  //   const [count, setCount] = useState(1);

  //   console.log(count);

  //   if (count > 3) {
  //     return (
  //       <div className="container">
  //         {/* <h3>Sorry {props.currentUser}</h3> */}
  //         <h2>Sorry Your Chances are over</h2>
  //       </div>
  //     );
  //   }

  if (showResult) {
    return (
      <div className="container results">
        <h2>Results</h2>
        <ul>{renderResultsData()}</ul>
        <button className="btn btn-primary" onClick={restart}>
          Restart
        </button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <Progress total={questions.length} current={currentQuestion + 1} />
        <Question questions={question} />
        {renderError()}
        <Answers
          question={question}
          currentAnswer={currentAnswer}
          handleClick={handleClick}
        />
        <button className="btn btn-primary" onClick={next}>
          Confirm and Continue
        </button>

        {/* <button
          className="btn btn-primary"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Try again
        </button> */}
        <button
          className="btn btn-primary"
          onClick={() => app.auth().signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
};
export default Quiz;
