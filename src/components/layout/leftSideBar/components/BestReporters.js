import React from "react";
import './bestReporters.css'

const BestReporters = ({user}) => {
  return (
    <div>
      <div className="bestReportersItem my-1">
        <div
          className="row p-0 m-0 d-flex justify-content-center align-items-center"
          style={{ height: "5rem" }}
        >
          <div className="bestReportersItemImg col-4 d-flex justify-content-center align-items-center">
            <img
              src="/images/user img.png"
              alt=""
              style={{ width: "5rem", height: "5rem" }}
            />
          </div>
          <div className="bestReportersItemName col-8 d-flex flex-column justify-content-center align-items-start">
            <div>
              <p className="p-0 m-0 fw-bold fs-5">{user.name}</p>
            </div>
            <div>
              <p className="p-0 m-0 text-muted" style={{ direction: "ltr" }}>
                {user.username}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default BestReporters;
