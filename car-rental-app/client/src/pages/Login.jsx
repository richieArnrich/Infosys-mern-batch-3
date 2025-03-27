import React, { useState } from "react";
import { Instance } from "../utils/Instance";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../utils/Tokens";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    // Your API call here
    const loginObj = { email, password };
    Instance.post("/users/loginuser", loginObj)
      .then((res) => {
        console.log(res.data);
        alert("login successfull");
        navigate("/");
        setToken(res.data.token);
        setUser(res.data.userDoc);
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  }

  return (
    <div
      className="container p-3"
      style={{ width: "50%", marginTop: "5rem", backgroundColor: "#F9F6EE" }}
    >
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
