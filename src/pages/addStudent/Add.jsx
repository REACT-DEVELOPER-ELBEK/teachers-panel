import React, { useState } from "react";
import "./Add.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [group, setGroup] = useState("");
  const [direction, setDirection] = useState("");
  const toHome = useNavigate();
  const name = JSON.parse(localStorage.getItem("userName"));
  const toLogin = useNavigate();

  function postData() {
    if ((firstName, lastName, group, direction).trim().length == 0) {
      toast.error("Oops you missed field", {
        theme: "colored",
      });
    } else {
      axios.post("http://localhost:3000/students", {
        firstName,
        lastName,
        group,
        direction,
        file,
      });
      toast.success("Student successfully added", {
        theme: "colored",
      });
      setTimeout(() => {
        toHome("/");
      }, 1200);
    }
  }

  const [file, setFile] = useState("");
  const formData = new FormData();
  formData.append("image", file);
  function addFile(e) {
    const imgFile = URL.createObjectURL(e.target.files[0]);
    setFile(imgFile);
  }

  return (
    <div className="add">
      <div className="container">
        <div className="add__wrapper">
          <h2>Add Students</h2>
          <div className="add__form">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First name"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last name"
            />
            <input
              onChange={(e) => setGroup(e.target.value)}
              type="text"
              placeholder="Group number"
            />
            <input
              onChange={(e) => setDirection(e.target.value)}
              type="text"
              placeholder="Direction"
            />
            <input
              type="file"
              onChange={addFile}
              id="fileInput"
              accept="image/png, image/jpg, image/gif, image/jpeg"
            />
          </div>
          <button type="submit" onClick={() => postData()}>
            + Add Student
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Add;
