import React from "react";
import logo from "../../assets/AllImages/man.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-text">
        <h1>Getting one step nearer to your dream job</h1>
        <p>
          With all the information you require, explore many career options. It
          is your future. Find it here. Manage each step of the employment
          application process.
        </p>
        <Link to="/FeaturedJobs">
          <button className="btnGetStarted">Get Started</button>
        </Link>
      </div>
      <div className="header-image">
        <img src={logo} alt="image" />
      </div>
    </div>
  );
};

export default Header;
