import React, { useEffect, useState } from "react";
import "./FeaturedJobs.css";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [featuredJob, setFeaturedJob] = useState([]);
  const [allFeaturedJob, setAllFeaturedJob] = useState([]);

  useEffect(() => {
    fetch(`Jobs.json`)
      .then((res) => res.json())
      .then((data) => setFeaturedJob(data));
  }, []);

  const slice = featuredJob.slice(0, 4);

  const AllDataShow = () => {
    setAllFeaturedJob(featuredJob.slice(4, 6));
  };

  return (
    <div className="FeaturedJobsContainer">
      <h1>Featured Jobs</h1>
      <p>
        Explore a variety of job alternatives after gathering all the necessary
        information. It's essential to your future.
      </p>
      <div className="FeaturedJobs">
        {slice.map((job) => (
          <FeaturedJob key={job.id} job={job}></FeaturedJob>
        ))}
      </div>
      <div className="FeaturedJobs">
        {allFeaturedJob.map((job) => (
          <FeaturedJob key={job.id} job={job}></FeaturedJob>
        ))}
      </div>

      {allFeaturedJob.length ? (
        ""
      ) : (
        <button className="btnSeeMore" onClick={() => AllDataShow()}>
          See More
        </button>
      )}
    </div>
  );
};

export default FeaturedJobs;
