import React from "react";
import { useEffect } from "react";
import Header from "./components/header/Header";
import MainTweets from "./components/mainTweets/MainTweets";
import NewTweet from "./components/newTweet/NewTweet";
import { useDispatch, useSelector } from "react-redux";
import { loadTweetsRequestServer } from "../../../redux/apiRedux/loadTweetsRedux/actions.js";
import "./mainSite.css";

const MainSite = () => {
  const dispatch = useDispatch();

  const tweetList = useSelector((state) => state.tweetList);

  useEffect(() => {
    dispatch(loadTweetsRequestServer());
  }, []);

  return (
    <div style={{ direction: "rtl" }}>
      <Header />

      <NewTweet />

      <MainTweets tweetList={tweetList} />
    </div>
  );
};

export default MainSite;
