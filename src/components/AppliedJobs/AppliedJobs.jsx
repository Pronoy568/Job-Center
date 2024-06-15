import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities/fakedb";
import "./AppliedJobs.css";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [detailsData, setDetailsData] = useState([]);
  const [remoteFilter, setRemoteFilter] = useState(false);
  const [onsiteFilter, setOnsiteFilter] = useState(false);

  useEffect(() => {
    fetch(`../Jobs.json`)
      .then((res) => res.json())
      .then((data) => {
        const applyJobData = getShoppingCart();
        let newArr = [];
        let remoteArr = [];
        let onsiteArr = [];

        for (const id in applyJobData) {
          let FindDetails = data.find((f) => f.id == id);

          if (FindDetails) {
            if (FindDetails.remote_or_onsite === "Remote") {
              remoteArr.push(FindDetails);
            } else {
              onsiteArr.push(FindDetails);
            }

            FindDetails.quantity = applyJobData[id];
            newArr.push(FindDetails);
          } else {
            console.log("Waiting");
          }
        }

        if (remoteFilter) {
          setDetailsData(remoteArr);
        } else if (onsiteFilter) {
          setDetailsData(onsiteArr);
        } else {
          setDetailsData(newArr);
        }
      });
  }, [remoteFilter, onsiteFilter]);

  const handleRemoteFilter = () => {
    setRemoteFilter(true);
    setOnsiteFilter(false);
  };

  const handleOnsiteFilter = () => {
    setRemoteFilter(false);
    setOnsiteFilter(true);
  };

  return (
    <div className="AppliedJobsContainer">
      <div className="AppliedJobsHeading">
        <h1 className="AppliedJobsTitle">Applied Jobs</h1>
      </div>
      {detailsData.length > 0 && (
        <div className="FilterJobBtn">
          <button onClick={handleRemoteFilter}>Filter by Remote Job</button>
          <button onClick={handleOnsiteFilter}>Filter by Onsite Job</button>
        </div>
      )}
      <div>
        {detailsData.length === 0 ? (
          <div className="NOAppliedJobs">
            <h1>No Applied Here. Please Apply to your prospective Jobs.</h1>
          </div>
        ) : (
          detailsData.map((detailData) => (
            <AppliedJob
              key={detailData.id}
              detailData={detailData}
            ></AppliedJob>
          ))
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
