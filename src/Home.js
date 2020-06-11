import React, { useEffect, useState } from "react";
import app from "./base";

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

  // console.log(questions);

  return (
    <div>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Home;
