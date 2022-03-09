import React from "react";
import "./mainTweetText.css";

const MainTweetText = ({ tweeterText }) => {
  const words = tweeterText.split(" ")
  // console.log("words :",words);
  return (
    <div>
      <div className="mainTweetsText mt-3">
        <p className="m-0 p-0">{tweeterText.split(" ").map((word,index)=>{
          if (word.includes("#")) {
            return <span key={index} className="text-primary">{`${word+" "} `}</span>
          }
          else{
            return <span key={index}>{`${word+" "} `}</span>
          }
        })}</p>
      </div>
    </div>
  );
};

export default MainTweetText;
