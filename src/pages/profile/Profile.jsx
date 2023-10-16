import React from "react";
import "./Profile.scss";
import { MdLogout } from "react-icons/md";

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <div className="profile__wrapper">
          <h2>Hello, {JSON.parse(localStorage.getItem("userName"))}</h2>
          <button><MdLogout/> Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
