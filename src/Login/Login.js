import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../Home/Home";

function Login(props) {
  const [state, setState] = useState({
    name: "",
    level: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    console.log("state", state);
    event.preventDefault();
  };

  const onNavigationHome = () => {
    props.history.push("/home");
  };

  console.log("state", state);

  return (
    <form onSubmit={handleSubmit} className="login">
      <div className="form-group text-left">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="TYPE YOUR NAME"
          onChange={handleChange}
        />
      </div>
      <div className="form-group text-left">
        <select value={state.value} onChange={handleChange} id="level">
          <option>DIFFICULTY LEVEL</option>
          <option value="EASY">EASY</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HARD">HARD</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={onNavigationHome}>
        Start Game
      </button>
      <Router>
        <Route
          path="/home"
          render={(props) => (
            <Home {...props} name={state.name} level={state.level} /> // stuck here, props not passing through route component
          )}
        />
      </Router>
    </form>
  );
}

export default Login;
