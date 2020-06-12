import React from "react";

const Question = (props) => {
  //   console.log(props.questions);

  let question = props.questions?.question;
  //   console.log(question);

  return <h1>{question}</h1>;
};

export default Question;
