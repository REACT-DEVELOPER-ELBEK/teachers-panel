import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./routes/dashboard/Dashboard";
import "./App.css";
import Add from "./pages/addStudent/Add";
import Login from "./pages/auth/Login";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <Dashboard />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<Add />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
