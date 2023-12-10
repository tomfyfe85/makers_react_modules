import React, { useState } from "react";
const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  
  const handleUsernameChange = (event) => {
    const inputEl = event.target;
    setUsername(inputEl.value)
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://url.com/endpoint", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password })
    });
  };

  return (
    <form onSubmit ={handleSubmit}>
      <label>
        Enter your username:
        <input
          type="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <label>
        Enter your password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label>
        Submit
        <input type="submit" name="submit"/>
      </label>
    </form>
  );
};

export default Form;
