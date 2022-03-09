import React from "react";
import { Link } from "react-router-dom";
import HottestHashtags from "./components/hottestHashtags/HottestHashtags";
import Logo from "./components/logo/Logo";
import "./rightSideBar.css";

const RightSiteBar = () => {
  return (
    <div>
      <Link to={"/"} style={{textDecoration:"none", color:"inherit"}}>
        <Logo />
      </Link>

      <HottestHashtags />

    </div>
  );
};

export default RightSiteBar;
