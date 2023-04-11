import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-Title">
        <Link to="/">
          <h1>JobCenter</h1>
        </Link>
      </div>
      <div className="Navbar-Link">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
        <ActiveLink to="/statistics">Statistics</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
      </div>
      <div>
        <Link to="/FeaturedJobs">
          <button className="applyBtn">Apply</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
