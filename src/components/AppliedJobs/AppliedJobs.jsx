import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities/fakedb";
import "./AppliedJobs.css";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [detailsData, setDetailsData] = useState([]);
  let [remoteFilter, setRemoteFilter] = useState(false);
  let [onsiteFilter, setOnsiteFilter] = useState(false);

  useEffect(() => {
    fetch(`../Jobs.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(remoteFilter);

        const applyJobData = getShoppingCart();
        let newArr = [];
        let remoteArr = [];
        let onsiteArr = [];

        for (const id in applyJobData) {
          let FindDetails = data.find((f) => f.id == id);

          if (FindDetails.remote_or_onsite === "Remote") {
            remoteArr.push(FindDetails);
          } else {
            onsiteArr.push(FindDetails);
          }

          if (FindDetails) {
            FindDetails.quantity = applyJobData[id];
            newArr.push(FindDetails);
          } else {
            console.log("Waiting");
          }
        }

        if (remoteFilter === true) {
          setDetailsData(remoteArr);
        } else if (onsiteFilter === true) {
          setDetailsData(onsiteArr);
        } else if (remoteFilter === false || remoteFilter === false) {
          setDetailsData(newArr);
        } else {
          console.log("Unknown filter");
        }
      });
  }, []);

  return (
    <div className="AppliedJobsContainer">
      <div className="AppliedJobsHeading">
        <h1 className="AppliedJobsTitle">Applied Jobs</h1>
      </div>
      {detailsData.length > 0 && (
        <div className="FilterJobBtn">
          <button onClick={() => setRemoteFilter(true)}>
            Filter by remote Job
          </button>
          <button onClick={() => setOnsiteFilter(true)}>
            Filter by Onsite Job
          </button>
        </div>
      )}
      <div>
        {detailsData.length === 0 ? (
          <div className="NOAppliedJobs">
            <h1>No Applied Here. Please Apply your perspective Jobs.</h1>
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
