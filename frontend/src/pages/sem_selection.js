import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <DropdownButton id="dropdown-basic-button" title="Choose Your Semester">
          <Dropdown.Item href="/sem1">Semester 1</Dropdown.Item>
          <Dropdown.Item href="/sem2">Semester 2</Dropdown.Item>
          <Dropdown.Item href="/sem3">Semester 3</Dropdown.Item>
          <Dropdown.Item href="/sem4">Semester 4</Dropdown.Item>
          <Dropdown.Item href="/sem5">Semester 5</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default home;
