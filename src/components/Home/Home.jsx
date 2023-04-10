import React from "react";
import Header from "../Header/Header";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <JobCategoryList></JobCategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
