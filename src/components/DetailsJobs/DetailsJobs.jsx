import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailsJobs.css";

const DetailsJobs = () => {
  const [detailsFindData, setDetailsFindData] = useState({});
  const detailsId = useParams();

  useEffect(() => {
    fetch(`../Jobs.json`)
      .then((res) => res.json())
      .then((data) => {
        let FindDetails = data.find((f) => f.id == detailsId.id);
        if (FindDetails) {
          setDetailsFindData(FindDetails);
        } else {
          console.log("Waiting");
        }
      });
  }, []);

  return (
    <div className="DetailsJobsContainer">
      <div className="DetailsJobsHeading">
        <h1>Job Details</h1>
      </div>
      <div className="DetailsJobsDescriptionContact">
        <div className="DetailsJobsDescription">
          <p>Job Description: {detailsFindData.job_description}</p>
          <p>Job Responsibility: {detailsFindData.job_responsibility}</p>
          <p>Educational Requirements :</p>
          {detailsFindData.educational_requirements}
          <p>Experiences</p>
          {detailsFindData.experiences}
        </div>
        <div className="DetailsJobsContact">
          <h1>Job Details</h1>
          <h2>{detailsFindData.salary}</h2>
          <h2>{detailsFindData.job_title}</h2>
          <h1>Contact Information</h1>
          <p>Phone: {detailsFindData.phone}</p>
          <p>Email: {detailsFindData.email}</p>
          <p>Address: {detailsFindData.location}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsJobs;
