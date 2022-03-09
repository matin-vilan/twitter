import { HOTTEST_HASHTAGS, LIKE, PROFILE, TWEET_LIST, USERS } from "./types";

const initialState = {
  tweetList:[],
  hottestHashtags:[],
  users:[],
  profile:[],
  like:[]
};

export const tweetListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TWEET_LIST:
      return {...state , tweetList:action.payload};
    case HOTTEST_HASHTAGS:
      return {...state , hottestHashtags:action.payload};
    case USERS:
      return {...state , users:action.payload};
    case LIKE:
      return {...state, like:action.payload}

    default:
      return state;
  }
};
