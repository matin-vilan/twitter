import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="main-header-tweeter">
        <div className="row p-0 m-0">
          <div className="main-header col-12">
            <Link to={"/"} style={{textDecoration:"none",color:"inherit"}}>
              <div className="header-container cursor-pointer d-flex align-items-center">
                <i className="bi bi-house-door-fill ms-2"></i>
                <p className="m-0 p-0">خانه</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
