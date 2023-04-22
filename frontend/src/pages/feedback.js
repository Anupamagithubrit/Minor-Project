import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [feedback, setfeedback] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/feedback", {
          email,
          feedback,
        })
        .then((res) => {
          if (res.data === "sent") {
            alert("Feedback Sent Succesfully!");
            history("/semselection");
            window.location.reload();
          } else if (res.data === "notsent") {
            alert("Feedback not sent");
          }
        })
        .catch((e) => {
          alert("Feedback not sent");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="feedback">
      <h1>Feedback Form</h1>
      <form action="POST">
        <input
          className="email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your Email here"
        ></input>
        <input
          className="fb"
          type="text"
          onChange={(e) => {
            setfeedback(e.target.value);
          }}
          placeholder="Enter your Feedback here"
        ></input>

        <input type="submit" onClick={submit} className="button"></input>
      </form>
      <br />
    </div>
  );
};

export default Feedback;
