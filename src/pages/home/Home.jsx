import { useEffect, useState } from "react";
import "./Home.scss";
import { greetBg } from "../../assets/img";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  ///////// FENTCHING
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.log(error));
  }, []);
  const name = JSON.parse(localStorage.getItem("userName"));
  function deleteStudent(id, name) {
    axios.delete(`http://localhost:3000/students/${id}`);
    toast.success(`${name} is successfully removed`, {
      theme: "colored"
    })
    setTimeout(() => {
      window.location.reload()
    }, 1270);
  }

  let toEdit = useNavigate();

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
    <>
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
                  <th>Image</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Group Number</th>
                  <th>Direction</th>
                  <th>Buttons</th>
                </tr>
              </thead>
              {students.map((student, index) => (
                <tbody key={index}>
                  <tr>
                    <td><img src={student.file} alt="" /></td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.group}</td>
                    <td>{student.direction}</td>
                    <td>
                      <Link to={`/edit/${student.id}`}>
                        <TbEdit />
                      </Link>
                      <button>
                        <MdDeleteForever
                          onClick={() => deleteStudent(student.id, student.firstName)}
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer/>
    </>
  );
};

export default Home;
