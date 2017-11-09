import React from "react";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="card  pink accent-1">
        <div className="card-content white-text">
          <span className="card-title">WELCOME TO SURVEY APP !</span>
          <h5>
            <p style={{ textAlign: "left" }}>
              Survey app helps you create many lists of survey campaigns, and
              get calculated results basing on the response of your client.
            </p>
            <p style={{ textAlign: "left" }}>
              {" "}
              It is easy all you need is signing up,pay for the service and
              create a survey.{" "}
            </p>
          </h5>
          <hr style={{ color: "black" }} />
          <h4>
            <p className="purple-text">
              Start getting results now with Survey App!{" "}
            </p>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Landing;
