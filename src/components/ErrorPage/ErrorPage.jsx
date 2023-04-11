import { FaceFrownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <section className="ErrorPageContainer">
      <div>
        <FaceFrownIcon className="FaceIcon" />
        <div>
          <h2 className="ErrorTitle">
            <span>Error</span>
            {status || 404}
          </h2>
          <p className="ErrorMessage">{error?.message}</p>
          <Link to="/" className="btnBackToHome">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
