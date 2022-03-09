import { HOTTEST_HASHTAGS, LIKE, TWEET_LIST, USERS } from "./types";
import axios from "axios";
import { getAxiosInstanceApi } from "../../../components/api/Api";

export const loadTweets = (tweets) => {
  return {
    type: TWEET_LIST,
    payload: tweets,
  };
};

export const loadHottestHashtags = (hashtags) => {
  return {
    type: HOTTEST_HASHTAGS,
    payload: hashtags,
  };
};

export const loadUsers = (users) => {
  return {
    type: USERS,
    payload: users,
  };
};

export const likes = (likes) => {
  return {
    type: LIKE,
    payload: likes,
  };
};


export const loadTweetsRequestServer = () => {
  return async (dispatch) => {
    localStorage.setItem(
      "x-auth-token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjYxYjg2MzEwMTVhYTAwMmJjOTJkNDYiLCJpYXQiOjE2NDY0NDIwNzR9.tYrfM01nYSVwj7GVljHUXgLkuLx9fKDyQanoZ8PUvfQ"
    );
    getAxiosInstanceApi()
      .post("getAllTweet")
      .then((res) => {
        dispatch(loadTweets(res.data));
      })
      .catch((err) => {
        dispatch(loadTweets(err.message));
      });
  };
};

export const loadHotHashtagsRequestServer = () => {
  return async (dispatch) => {
    localStorage.setItem(
      "x-auth-token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjYxYjg2MzEwMTVhYTAwMmJjOTJkNDYiLCJpYXQiOjE2NDY0NDIwNzR9.tYrfM01nYSVwj7GVljHUXgLkuLx9fKDyQanoZ8PUvfQ"
    );
    getAxiosInstanceApi()
      .post("getAllTweet")
      .then((res) => {
        dispatch(loadHottestHashtags(res.data));
      })
      .catch((err) => {
        dispatch(loadHottestHashtags(err.message));
      });
  };
};

export const loadUsersRequestServer = () => {
  return async (dispatch) => {
    localStorage.setItem(
      "x-auth-token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjYxYjg2MzEwMTVhYTAwMmJjOTJkNDYiLCJpYXQiOjE2NDY0NDIwNzR9.tYrfM01nYSVwj7GVljHUXgLkuLx9fKDyQanoZ8PUvfQ"
    );
    getAxiosInstanceApi()
      .get("getAllUser")
      .then((res) => {
        dispatch(loadUsers(res.data));
      })
      .catch((err) => {
        dispatch(loadUsers(err.message));
      });
  };
};


export const loadLikesRequestServer = (id) => {
  return async (dispatch) => {
    localStorage.setItem(
      "x-auth-token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjYxYjg2MzEwMTVhYTAwMmJjOTJkNDYiLCJpYXQiOjE2NDY0NDIwNzR9.tYrfM01nYSVwj7GVljHUXgLkuLx9fKDyQanoZ8PUvfQ"
    );
    getAxiosInstanceApi()
      .get("likeTweet/"+id)
      .then((res) => {
        dispatch(likes(res.data));
      })
      .catch((err) => {
        dispatch(likes(err.message));
      });
  };
};


