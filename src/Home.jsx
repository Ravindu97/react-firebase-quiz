import React, { useEffect, useState } from "react";
import app from "./base";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";

const Home = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = app.firestore();
      const data = await db.collection("Questions").get();

      setQuestions(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  if (!questions) {
    return "Loading ...";
  }

  // saving the data in seperate

  // let questionsArray = [];

  // questions.map((question) => {
  //   questionsArray.push(question?.question);
  // });

  // console.log(questionsArray);

  // console.log(questions);

  // adding all the question from the state to an object

  // radio buttons
  // const [value, setValue] = React.useState("female");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  return (
    <div>
      {/* <FormControl component="fieldset">
        <FormLabel component="legend">{questions.map()}</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl> */}

      <ul>
        {questions.map((question) => (
          <div>
            <h3>{question?.question}</h3>
            <li>{question?.option_a}</li>
            <li>{question?.option_b}</li>
            <li>{question?.option_c}</li>
            <li>{question?.option_d}</li>
          </div>
        ))}
      </ul>

      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Home;
