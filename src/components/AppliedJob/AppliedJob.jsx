import React from "react";
import "./AppliedJob.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AppliedJob = ({ detailData }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    salary,
    location,
    remote_or_onsite,
    fullTime_or_partTime,
  } = detailData;
  return (
    <div className="AppliedJobContainer">
      <div className="AppliedJobImg">
        <img src={company_logo} alt={job_title} />
      </div>
      <div className="AppliedJobInformation">
        <h1>{job_title}</h1>
        <h2>{company_name}</h2>
        <div className="typesOfJobBtn">
          <button>{remote_or_onsite}</button>
          <button className="btn">{fullTime_or_partTime}</button>
        </div>
        <div className="placeSalaryJob">
          <p>
            {" "}
            <FontAwesomeIcon className="ICON" icon={faLocationDot} />
            {location}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon className="ICONS" icon={faSackDollar} />
            Salary : {salary}
          </p>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button className="btnViewDetails">View Details</button>
      </Link>
    </div>
  );
};

export default AppliedJob;
