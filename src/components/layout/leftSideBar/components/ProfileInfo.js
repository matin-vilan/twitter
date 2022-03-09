import React, { useEffect, useState } from "react";
import { loadProfile } from "../../../api/ApiTweets";
import "./profileInfo.css";

const ProfileInfo = () => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    loadProfile((isOk, data) => {
      if (!isOk) {
        return console.log("data unAvailable", data);
      } else {
        return setProfile(data);
      }
    });
  }, []);

  return (
    <div>
      <div className="profileInfo col-12 my-4">
        <div className="row p-0 m-0" style={{direction:"rtl"}}>
          <div className="profileInfoImg col-4 cursor-pointer">
            <img src={profile?.image} alt="" className="img-fluid" style={{borderRadius:"50%"}} />
          </div>
          <div className="profileInfoUsername col-8 d-flex justify-content-end cursor-pointer">
            <p className="p-0 m-0 ">{profile?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
