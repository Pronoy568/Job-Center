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
        <h1 className="titleJob">Job Details</h1>
      </div>
      <div>
        <div className="DetailsJobsDescriptionContact">
          <div className="DetailsJobsDescription">
            <div className="DetailsJobsDescriptionAllRight">
              <span>Job Description: </span>
              <p>{detailsFindData.job_description}</p>
            </div>
            <div className="DetailsJobsDescriptionAllRight">
              <span>Job Responsibility: </span>
              <p>{detailsFindData.job_responsibility}</p>
            </div>
            <div className="DetailsJobsDescriptionAllRight">
              <span>Educational Requirements:</span>
              <p>{detailsFindData.educational_requirements}</p>
            </div>
            <div className="DetailsJobsDescriptionAllRight">
              <span>Experiences:</span>
              <p>{detailsFindData.experiences}</p>
            </div>
          </div>
          <div>
            <div className="DetailsJobsContact">
              <h1>Job Details</h1>
              <div className="DetailsJobsFlex">
                <span>Salary: </span>
                <p>{detailsFindData.salary}</p>
              </div>
              <div className="DetailsJobsFlex">
                <span>JobTitle: </span>
                <p>{detailsFindData.job_title}</p>
              </div>

              <h1>Contact Information</h1>

              <div className="DetailsJobsFlex">
                <span>Phone: </span>
                <p>{detailsFindData.phone}</p>
              </div>

              <div className="DetailsJobsFlex">
                <span>Email: </span>
                <p>{detailsFindData.email}</p>
              </div>

              <div className="DetailsJobsFlex">
                <span>Address: </span>
                <p>{detailsFindData.location}</p>
              </div>
            </div>
            <div>
              <button className="applyNowBtn">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsJobs;
