import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    })
  }

  return (
    <>
      <h1
        style={{
          backgroundColor: "yellow",
          color: "black",
        }}
      >
        Use-State Hook
      </h1>

      {/* <div className="container">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+</button>

        <h1>{count}</h1>

        <button className="btn btn-primary"
          onClick={() => (count === 0) ? setCount(0) : setCount(count - 1)}>-</button>
      </div> */}

      <div className="inputBox">
        <input
          type="text"
          name="username"
          placeholder="Enter Name..."
          className="input"
          value={formData.username}
          onChange={handleInput}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Email..."
          className="input"
          value={formData.email}
          onChange={handleInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password..."
          className="input"
          value={formData.password}
          onChange={handleInput}
        />
        <button className="btn btn-danger">Register Now</button>
        <div className="para">
          <p>UserName : {formData.username}</p>
          <p>Email : {formData.email}</p>
        </div>
      </div>
    </>
  );
};

export default App;
