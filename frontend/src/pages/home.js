import React from "react";

const home = () => {
  return (
    <div className="home">
      <h1>Welcome to Student Saathi</h1>
      <p>
        Site of Youtube Videos and Resources
        <br />
        which helps increases the chances
        <br />
        of your help without any nuances
      </p>
      <a href="/login">
        <button type="submit" className="enter">
          Click to enter
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </a>
    </div>
  );
};

export default home;
