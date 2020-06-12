import React from "react";
import Answer from "./Answer";

const Answers = (props) => {
  //   console.log(props.question?.question);

  //   console.log(props.question);
  //   <Answer letter="c" answer={props?.question?.option_c} />

  return (
    <>
      <Answer
        letter="a"
        answer={props.question?.option_a}
        selected={props.currentAnswer === "a"}
        handleClick={props.handleClick}
      />
      <Answer
        letter="b"
        answer={props.question?.option_b}
        selected={props.currentAnswer === "b"}
        handleClick={props.handleClick}
      />
      <Answer
        letter="c"
        answer={props.question?.option_c}
        selected={props.currentAnswer === "c"}
        handleClick={props.handleClick}
      />
      <Answer
        letter="d"
        answer={props.question?.option_d}
        selected={props.currentAnswer === "d"}
        handleClick={props.handleClick}
      />
    </>
  );
};

export default Answers;
