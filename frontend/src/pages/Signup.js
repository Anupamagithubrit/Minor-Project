import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exists") {
            alert("User already exists");
          } else if (res.data === "notexits") {
            // console.log("Test1");
            history("/login");
            alert("User Created. Please go to Login page and Login.");
          }
        })
        .catch((e) => {
          alert("Wrong Details Entered");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="Signup">
      <h1>Signup</h1>
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
      <a href="/login">Log in</a>
    </div>
  );
};

export default Signup;
