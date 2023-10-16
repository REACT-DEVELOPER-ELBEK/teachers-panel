import { useEffect, useState } from "react";
import "./Home.scss";
import { greetBg } from "../../assets/img";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  ///////// FENTCHING
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.log(error));
  }, []);
  const name = JSON.parse(localStorage.getItem("userName"));

  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();
  const year = today.getFullYear();
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const toLogin = useNavigate();
  return !name ? (
    toLogin("/login")
  ) : (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <div className="home__banner">
            <div className="banner__text">
              <h1>
                {monthName[month]} {date}, {year}
              </h1>
              <h2>Welcome back, {name}!</h2>
            </div>
            <img src={greetBg} alt="" />
          </div>
          <div className="students__display">
            <table>
              <thead>
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Group Number</th>
                  <th>Direction</th>
                </tr>
              </thead>
              {students.map((student, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.group}</td>
                    <td>{student.direction}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
