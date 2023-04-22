import React from "react";

const Contact = () => {
  return (
    <div className="contact container row-2">
      <h1>Contact Us</h1>
      <div className="contacts row">
        <div className="c1 col-md-6 col-sm-12">
          <h4>Contact 1</h4>
          <br />
          <label htmlFor="email">Email : </label>
          <a href="">email1@gmail.com</a>
          <br />
          <label htmlFor="email">Linkedin : </label>
          <a href="">LinkedIn Profile 1</a>
        </div>
        <div className="c2 col-md-6 col-sm-12">
          <h4>Contact 2</h4>
          <br />
          <label htmlFor="email">Email : </label>
          <a href="">email2@gmail.com</a>
          <br />
          <label htmlFor="email">Linkedin : </label>
          <a href="">LinkedIn Profile 2</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
