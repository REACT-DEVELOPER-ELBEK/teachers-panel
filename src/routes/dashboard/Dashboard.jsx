import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import "./Dashboard.scss";
import { dashLogo } from "../../assets/img";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MdOutlineSpaceDashboard,
  MdLogout,
  MdOutlinePersonAddAlt1,
  MdOutlineContactEmergency,
} from "react-icons/md";

const Dashboard = () => {
  function LogOut() {
    localStorage.clear();
    toast.success("Account successfully logged out", {
      theme: "colored",
    });
    setTimeout(() => {
      window.location.reload()
    }, 1100);
  }
  return (
    <nav>
      <ToastContainer />
      <div className="container">
        <div className="nav__wrapper">
          <div className="dash__logo">
            <img src={dashLogo} alt="" />
          </div>
          <div className="dash__links">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "incative")}
            >
              <MdOutlineSpaceDashboard />
              Dashboard
            </NavLink>
            <NavLink
              to="/add-student"
              className={({ isActive }) => (isActive ? "active" : "incative")}
            >
              <MdOutlinePersonAddAlt1 />
              Add Student
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "incative")}
            >
              <MdOutlineContactEmergency />
              Profile
            </NavLink>
          </div>
          <button onClick={() => LogOut()}>
            <MdLogout /> Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Dashboard;
