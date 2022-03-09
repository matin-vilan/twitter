import React from "react";
import MainTweetButtons from "./components/buttons/MainTweetButtons";
import MainTweetText from "./components/mainTweetText/MainTweetText";
import UserInfo from "./components/userInfo/UserInfo";
import "./tweet.css";

const Tweet = ({tweet}) => {
  return (
    <div>
      {/* user tweet content */}
      <div className="mainTweetsCount bg-white mt-3">
        <div className="row p-0 m-0">
          {/* user information */}
          <UserInfo tweeterInfo={tweet.user} />
          {/* user tweet */}
          <MainTweetText tweeterText={tweet.text} />
          {/* buttons */}
          <MainTweetButtons tweeterLikes={tweet} />
        </div>
      </div>
      {/* user tweet content finished */}
    </div>
  );
};

export default Tweet;
