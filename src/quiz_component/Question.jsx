import React from "react";

const Question = (props) => {
  console.log(props);
  let question = props.question?.question;
  //   console.log(props.question?.question);

  return <h1>{question}</h1>;
};

export default Question;
