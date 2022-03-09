import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  loadHotHashtagsRequestServer,
  loadHottestHashtags,
} from "../../../../../redux/apiRedux/loadTweetsRedux/actions";
import TrendHashtag from "./component/TrendHashtag";
import "./hottestHashtags.css";

const HottestHashtags = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.hottestHashtags);

  useEffect(() => {
    dispatch(loadHotHashtagsRequestServer());
  }, []);

  return (
    <div>
      <div className="hottestHashtags">
        <div className="hottest-hashtags col-12 d-flex justify-content-center align-items-center  my-3">
          <div>
            <p className="m-0 p-0">داغ ترین هشتگ ها</p>
          </div>
        </div>

        <div className="row p-0 m-0 d-flex justify-content-start">
          <div className="d-flex flex-column">
            {data?.map((hashtag, index) => {
              return (
                <Link to={"/hashtags/"+hashtag.text} style={{textDecoration:"none", color:"inherit"}}>
                  <TrendHashtag key={index} text={hashtag.text} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HottestHashtags;
