import React from "react";
import Answer from "./Answer";

const Answers = (props) => {
  //   console.log(props.question?.question);

  console.log(props);
  //   <Answer letter="c" answer={props?.question?.option_c} />

  return (
    <>
      <Answer
        letter="a"
        answer="16"
        selected={props.currentAnswer === "a"}
        handleClick={props.handleClick}
      />
      <Answer
        letter="b"
        answer="18"
        selected={props.currentAnswer === "b"}
        handleClick={props.handleClick}
      />
      <Answer
        letter="c"
        answer="20"
        selected={props.currentAnswer === "c"}
        handleClick={props.handleClick}
      />
      <Answer
        letter="d"
        answer="22"
        selected={props.currentAnswer === "d"}
        handleClick={props.handleClick}
      />
    </>
  );
};

export default Answers;
