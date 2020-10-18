import React from "react";
import "./App.css";
import Login from "./Containers/Login/Login";
import Home from "./Containers/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
