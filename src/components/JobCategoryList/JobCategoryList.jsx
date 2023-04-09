import React, { useEffect, useState } from "react";
import "./JobCategoryList.css";

const JobCategoryList = () => {
  const [jobCategory, setJobCategory] = useState([]);

  useEffect(() => {
    fetch(`JobCategory.json`)
      .then((res) => res.json())
      .then((data) => setJobCategory(data));
  }, []);

  return (
    <div className="jobCategoryListContainer">
      <h1>Job Category List</h1>
      <p>
        With all the information you need, explore many career options. Your
        future depends on it.
      </p>
      <div className="jobCategoryList">
        {jobCategory.map((job) => (
          <div className="jobCategory" key={job.id}>
            <img src={job.logo} alt={job.title} />
            <h2>{job.title}</h2>
            <p>{job.JobAvailable}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;
