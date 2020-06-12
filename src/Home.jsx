import React from "react";
import app from "./base";
import Quiz from "./quiz_component/quiz";
import { Redirect } from "react-router";
import { AuthContext } from "./Auth";
import { useContext } from "react";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Welcome to the quiz</h1>
      <div>
        <Quiz />
      </div>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Home;

// {/* <div>
//       <ul>
//         {questions.map((question) => (
//           <div>
//             <h3>{question?.question}</h3>
//             <li>{question?.option_a}</li>
//             <li>{question?.option_b}</li>
//             <li>{question?.option_c}</li>
//             <li>{question?.option_d}</li>
//           </div>
//         ))}
//       </ul>

// <button onClick={() => app.auth().signOut()}>Sign out</button>
//     </div>
//  */}

// code for the quiz components
// import React, { useEffect, useState } from "react";

// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";

// code for getting the database from the firebase

// const [questions, setQuestions] = useState([]);
// const [value, setValue] = useState("option_a");

// useEffect(() => {
//   const fetchData = async () => {
//     const db = app.firestore();
//     const data = await db.collection("Questions").get();

//     setQuestions(data.docs.map((doc) => doc.data()));
//   };
//   fetchData();
// }, []);

// if (!questions) {
//   return "Loading ...";
// }

// {
/* <div>
      {questions.map((question) => {
        return (
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">{question?.question}</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="option_a"
                  control={<Radio />}
                  label={question?.option_a}
                />
                <FormControlLabel
                  value="option_b"
                  control={<Radio />}
                  label={question?.option_b}
                />
                <FormControlLabel
                  value="option_c"
                  control={<Radio />}
                  label={question?.option_c}
                />
                <FormControlLabel
                  value="option_d"
                  control={<Radio />}
                  label={question?.option_d}
                />
              </RadioGroup>
            </FormControl>

            <button onClick={() => app.auth().signOut()}>Sign out</button>
          </div>
        );
      })}
    </div> */
// }
