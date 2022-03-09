import React from "react";
import "./layout.css"; //css file for layout
// components :
import LeftSideBar from "./leftSideBar/LeftSideBar";
import RightSideBar from "./rightSideBar/RightSiteBar";
import { Outlet } from "react-router-dom";

export default function Layout(props) {
  return (
    <div>
      <div className="row m-0 p-0">
        <div className="leftSideBar d-flex flex-column col-md-3 m-0 p-0">
          <LeftSideBar />
        </div>
        <div className="mainSite d-flex flex-column col-md-7 m-0 p-0">
            {props.children}
            <Outlet />
        </div>
        <div className="rightSideBar d-flex flex-column col-md-2 m-0 p-0">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
