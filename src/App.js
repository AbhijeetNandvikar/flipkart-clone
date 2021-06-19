import logo from "./logo.svg";
import React from "react";
import "./App.css";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MainApp from "./components/MainApp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
