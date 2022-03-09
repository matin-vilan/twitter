import React, { useState } from "react";
import { sendTweet } from "../../../../api/ApiTweets";
import './newTweet.css'

const NewTweet = () => {

  const [inputValue, setInputValue] = useState("");

  const handelClick = ()=>{
    if (inputValue === "") {
      return;
    }

    const formData = new FormData();
    formData.append("text",inputValue);
    sendTweet(formData, (isOk,data)=>{
      if(!isOk)
        return alert("unsuccessful ",data);
      else{
        console.log(data);
      }
    }) 
  }

  const handelChange =(e)=>{
    setInputValue(e.target.value)
  }

  return (
    <div>
      <div className="mainNewTweet">
        <div className="row p-0 m-0">
          <div className="mainNewTweetContent col-12 d-flex my-4">
            <div className="mainNewTweetImg">
              <img src="/images/user img.png" alt="" />
            </div>
            <div className="mainNewTweetText mx-3">
              <input
                type="text"
                name=""
                className="mainNewTweetTextInput"
                id="floatingTextarea2"
                onChange={handelChange}
                value={inputValue}
              />
              <label
                htmlFor="floatingTextarea2"
                className="mainNewTweetTextInputLabel"
              >
                توییت کن ...
              </label>
            </div>
          </div>

          <div className="mainNewTweetButtons col-12 my-3">
            <div className="row p-0 m-0">
              <div className="mainNewTweetButton col-2">
                <button className="btn btn-primary" onClick={handelClick}>توییت</button>
              </div>
              <div className="mainNewTweetPic position-relative col-1">
                <div className="btn mainNewTweetPicDivHover">
                  <i className="bi bi-image text-danger"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTweet;
