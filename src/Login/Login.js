import React, { useState } from "react";
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
    alert("An essay was submitted: " + state.name);
    event.preventDefault();
  };

  console.log("state", state);
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit" className="btn btn-primary" value="Submit">
        Start Game
      </button>
    </form>
  );
}

export default Login;
