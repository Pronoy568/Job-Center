import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailsJobs.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faSackDollar,
  faVoicemail,
  faPhone,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

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

  const handleAddCart = () => {
    toast("Congratulations Apply Successfully !!!");
    addToDb(detailsFindData.id);
  };

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
                <span>
                  {" "}
                  <FontAwesomeIcon
                    className="iconDetails"
                    icon={faSackDollar}
                  />
                  Salary:{" "}
                </span>
                <p>{detailsFindData.salary}</p>
              </div>
              <div className="DetailsJobsFlex">
                <span>
                  {" "}
                  <FontAwesomeIcon
                    className="iconDetails"
                    icon={faQuestionCircle}
                  />
                  JobTitle:{" "}
                </span>
                <p>{detailsFindData.job_title}</p>
              </div>

              <h1>Contact Information</h1>

              <div className="DetailsJobsFlex">
                <span>
                  {" "}
                  <FontAwesomeIcon className="iconDetails" icon={faPhone} />
                  Phone:{" "}
                </span>
                <p>{detailsFindData.phone}</p>
              </div>

              <div className="DetailsJobsFlex">
                <span>
                  {" "}
                  <FontAwesomeIcon className="iconDetails" icon={faVoicemail} />
                  Email:{" "}
                </span>
                <p>{detailsFindData.email}</p>
              </div>

              <div className="DetailsJobsFlex">
                <span>
                  {" "}
                  <FontAwesomeIcon
                    className="iconDetails"
                    icon={faLocationDot}
                  />
                  Address:{" "}
                </span>
                <p>{detailsFindData.location}</p>
              </div>
            </div>
            <div>
              <button onClick={handleAddCart} className="applyNowBtn">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsJobs;
