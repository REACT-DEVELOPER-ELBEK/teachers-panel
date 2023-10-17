import React, { useEffect, useState } from "react";
import "./Update.scss";
import { GrUpdate } from "react-icons/gr";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const id = useParams();
  const [studentData, setStudentData] = useState({
    id: id,
    firstName: "",
    lastName: "",
    group: "",
    direction: "",
  });
  useEffect(() => {
    axios(`http://localhost:3000/students/${id.id}`)
      .then((res) =>
        setStudentData({
          ...studentData,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          group: res.data.group,
          direction: res.data.direction,
        })
      )
      .catch((error) => console.log(error));
  }, []);
  const toHome = useNavigate()

  function updateStudent(){
    axios.put(`http://localhost:3000/students/${id.id}`, studentData)
    .then(res=>toHome("/"))
    .catch(error=>console.log(error))
  }
  return (
    <div className="update">
      <div className="container">
        <div className="update__wrapper">
          <h2>Edit Student</h2>
          <div className="update__form">
            <input
              type="text"
              placeholder="First name"
              value={studentData.firstName}
              onChange={(e) =>
                setStudentData({ ...studentData, firstName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Last name"
              value={studentData.lastName}
              onChange={(e) =>
                setStudentData({ ...studentData, lastName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Group number"
              value={studentData.group}
              onChange={(e) =>
                setStudentData({ ...studentData, group: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Direction"
              value={studentData.direction}
              onChange={(e) =>
                setStudentData({ ...studentData, direction: e.target.value })
              }
            />
          </div>
          <button type="submit" onClick={()=>updateStudent()}>
            <GrUpdate /> Edit Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
