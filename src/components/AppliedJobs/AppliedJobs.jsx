import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities/fakedb";
import "./AppliedJobs.css";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [detailsData, setDetailsData] = useState([]);

  useEffect(() => {
    fetch(`../Jobs.json`)
      .then((res) => res.json())
      .then((data) => {
        const applyJobData = getShoppingCart();
        let newArr = [];
        for (const id in applyJobData) {
          let FindDetails = data.find((f) => f.id == id);
          if (FindDetails) {
            FindDetails.quantity = applyJobData[id];

            newArr.push(FindDetails);
          } else {
            console.log("Waiting");
          }
        }
        setDetailsData(newArr);
      });
  }, []);

  return (
    <div className="AppliedJobsContainer">
      <div className="AppliedJobsHeading">
        <h1 className="AppliedJobsTitle">Applied Jobs</h1>
      </div>
      <div>
        {detailsData.map((detailData) => (
          <AppliedJob key={detailData.id} detailData={detailData}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
