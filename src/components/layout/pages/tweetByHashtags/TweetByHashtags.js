import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTweetsRequestServer } from "../../../../redux/apiRedux/loadTweetsRedux/actions";
import Hashtags from "./components/hashtags/Hashtags";
import "./tweetByHashtags.css";

const TweetByHashtags = () => {

    const dispatch = useDispatch();

    const tweetList = useSelector((state) => state.tweetList);
  
    useEffect(() => {
      dispatch(loadTweetsRequestServer());
    }, []);

  return (
    <div>
      <div className="hashtagsTweets my-2">
        {tweetList.map((tweet, index) => (
          <Hashtags key={index} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default TweetByHashtags;
