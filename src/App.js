import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Quiz from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import NavBar from "./NavBar";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <div>
          <PrivateRoute exact path="/" component={Quiz} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
