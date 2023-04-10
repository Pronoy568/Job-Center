import React, { useEffect, useState } from "react";
import "./FeaturedJobs.css";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [featuredJob, setFeaturedJob] = useState([]);

  useEffect(() => {
    fetch(`Jobs.json`)
      .then((res) => res.json())
      .then((data) => setFeaturedJob(data));
  }, []);

  return (
    <div className="FeaturedJobsContainer">
      <h1>Featured Jobs</h1>
      <p>
        Explore a variety of job alternatives after gathering all the necessary
        information. It's essential to your future.
      </p>
      <div className="FeaturedJobs">
        {featuredJob.map((job) => (
          <FeaturedJob key={job.id} job={job}></FeaturedJob>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
