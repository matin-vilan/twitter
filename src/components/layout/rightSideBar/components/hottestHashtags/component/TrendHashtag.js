import React from "react";

const TrendHashtag = ({ text }) => {
  return (
    <div>
      <div className="d-flex mt-2 justify-content-start align-items-center dir-rtl">
        <img src="images/hashtag.png" alt="" />
        <p className="p-0 mx-3 my-0">{text}</p>
      </div>
    </div>
  );
};

export default TrendHashtag;
