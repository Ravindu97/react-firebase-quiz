import React, { useState, useEffect } from "react";
import app from "../base";

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

  //   keeping track of number of attempts of user

  const [count, setCount] = useState(1);

  console.log(count);

  if (count > 3) {
    return (
      <div className="container">
        {/* <h3>Sorry {props.currentUser}</h3> */}
        <h2>Sorry Your Chances are over</h2>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Try again
      </button>
    </div>
  );
};
export default Quiz;
