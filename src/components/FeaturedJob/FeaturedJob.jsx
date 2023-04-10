import React from "react";
import "./FeaturedJob.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fullTime_or_partTime,
    location,
    salary,
  } = job;

  return (
    <div className="FeaturedJob">
      <img src={company_logo} alt={company_name} />
      <h1>{job_title}</h1>
      <h2>{company_name}</h2>
      <div className="typesOfJob">
        <button>{remote_or_onsite}</button>
        <button>{fullTime_or_partTime}</button>
      </div>
      <div className="placeSalary">
        <p>
          {" "}
          <FontAwesomeIcon className="icon" icon={faLocationDot} />
          {location}
        </p>
        <p>
          {" "}
          <FontAwesomeIcon className="icon" icon={faSackDollar} />
          Salary : {salary}
        </p>
      </div>
      <Link to={`/job/${id}`}>
        <button className="btnViewDetails">View Details</button>
      </Link>
    </div>
  );
};

export default FeaturedJob;
