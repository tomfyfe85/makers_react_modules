import React, { useState } from "react";
const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [count, setCount] = useState(0);

  const handleUsernameChange = (event) => {
    const inputEl = event.target;
    setUsername(inputEl.value);
  };

  const handlePasswordChange = (event) => {
    const length = event.target.value.length;
    setCount(length);
    setPassword(event.target.value);
    return length;
  };

  const handleNumberChange = (event) => {
    const inputEl = event.target;

    setPhoneNumber(inputEl.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://url.com/endpoint", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        phoneNumber: phoneNumber,
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <p>
          {count <= 8
            ? "password must be longer than 8 characters"
            : "password ok"}
        </p>
      </label>
      <label>
        Enter your phone number:
        <input
          type="number"
          name="number"
          value={phoneNumber}
          onChange={handleNumberChange}
        />
      </label>
      <label>
        Submit
        <input type="submit" name="submit" />
      </label>
    </form>
  );
};

export default Form;
