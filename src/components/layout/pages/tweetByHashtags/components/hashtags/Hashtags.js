import React from "react";
import HashtagTweetText from "./components/hashtagsTweetText/HashtagTweetText";
import HashtagTweetButtons from "./components/hashtagTweetButtons/HashtagTweetButtons";
import HashtagUserInfo from "./components/userInfo/HashtagUserInfo";
import "./hashtags.css";

const Hashtags = ({tweet}) => {
  return (
    <div>
      {/* user tweet content */}
      <div className="mainTweetsCount bg-white mt-3">
        <div className="row p-0 m-0">
          {/* user information */}
          <HashtagUserInfo tweeterInfo={tweet.user} />
          {/* user tweet */}
          <HashtagTweetText tweeterText={tweet.text} />
          {/* buttons */}
          <HashtagTweetButtons tweeterLikes={tweet.likes} />
        </div>
      </div>
      {/* user tweet content finished */}
    </div>
  );
};

export default Hashtags;
