import React from "react";
import './logo.css';

const Logo = () => {
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="logo-container col-12 my-4 d-flex justify-content-between align-items-center">
          <div className="twitter-pic d-flex align-items-center justify-content-center col-4">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="twitter-text d-flex align-items-center justify-content-center col-8">
            توییتر فارسی
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
