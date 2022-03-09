import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersRequestServer } from "../../../redux/apiRedux/loadTweetsRedux/actions";
import BestReporters from "./components/BestReporters";
import ProfileInfo from "./components/ProfileInfo";
import "./leftSideBar.css";

const LeftSideBar = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loadUsersRequestServer());
  }, []);

  return (
    <div>
      <div className="leftSideBar">
        <div className="row p-0 m-0">
          {/* user profile info  */}

          <ProfileInfo />

          {/* users in left side bar  */}

          <div className="bestReporters col-12 my-5">
            <div
              className="row p-0 m-0"
              style={{ backgroundColor: "rgba(128, 128, 128, 0.411)" }}
            >
              <div className="bestReportersHeaders col-12 my-3">
                <p className="fw-bold p-0 m-0">بهترین خبرنگاران</p>
              </div>
              <hr />

              <div className="bestReportersCounts">
                {users?.map((user, index)=>{
                  return <BestReporters key={index} user={user} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
