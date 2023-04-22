import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exists") {
            history("/semselection");
            window.location.reload();
          } else if (res.data === "notexists") {
            alert("Email/Password is wrong OR User does not exist");
          }
        })
        .catch((e) => {
          alert("Wrong Details Entered");
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your Email here"
        ></input>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your Password here"
        ></input>

        <input type="submit" onClick={submit}></input>
      </form>
      <br />
      <a href="/signup">Sign Up</a>
    </div>
  );
};

export default Login;
