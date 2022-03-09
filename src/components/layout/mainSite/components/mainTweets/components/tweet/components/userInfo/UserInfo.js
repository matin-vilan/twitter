import React from "react";
import "./userInfo.css"

const UserInfo = ({tweeterInfo}) => {
  return (
    <div>
      <div className="mainTweetsUserInfo col-12 mt-3">
        <div className="row p-0 m-0">
          <div className="mainTweetsUserInfoImg col-1">
            <img src={tweeterInfo.image} alt="user-Profile-Image" className="img-fluid" style={{borderRadius:"50%"}} />
          </div>
          <div className="mainTweetsUserInfoName col-11 d-flex justify-content-start align-items-center">
            <p className="m-0 p-0">{tweeterInfo.name}</p>
            <p className="m-0 p-0 text-muted"> {tweeterInfo.userName} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
