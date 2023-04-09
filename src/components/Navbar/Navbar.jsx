import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-Title">
        <h1>JobCenter</h1>
      </div>
      <div className="Navbar-Link">
        <Link to="/">Home</Link>
        <Link to="/appliedJobs">Applied Jobs</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <button className="applyBtn">Apply</button>
      </div>
    </nav>
  );
};

export default Navbar;
