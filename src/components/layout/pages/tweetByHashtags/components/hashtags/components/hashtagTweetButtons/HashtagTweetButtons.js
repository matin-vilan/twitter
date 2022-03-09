import React from "react";
import "./hashtagTweetButtons.css";

const HashtagTweetButtons = ({tweeterLikes}) => {
  return (
    <div>
      <div className="mainTweetsButtons my-3">
        <div className="retweetButton cursor-pointer me-3">
          <i className="bi bi-arrow-repeat m-0 p-0"></i>
        </div>
        <div className="likeButton cursor-pointer">
          <i className="bi bi-heart-fill m-0 p-0"></i>
        </div>
        <div className="likeCountButton d-flex justify-content-center align-items-center ms-1 text-muted fs-5">
          <p className="p-0 m-0">{tweeterLikes}</p>
        </div>
      </div>
    </div>
  );
};

export default HashtagTweetButtons;
