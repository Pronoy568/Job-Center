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
    <div>
      <div>
        <img src={company_logo} alt={job_title} />
      </div>
      <div>
        <h1>{job_title}</h1>
        <p>{company_name}</p>
        <div>
          <button>{remote_or_onsite}</button>
          <button>{fullTime_or_partTime}</button>
        </div>
        <div>
          <p>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} />
            {location}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faSackDollar} />
            Salary : {salary}
          </p>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default AppliedJob;
