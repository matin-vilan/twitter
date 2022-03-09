import { getAxiosInstanceApi } from "./Api";

export const loadProfile =  (callback)=>{

  localStorage.setItem("x-auth-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjYxYjg2MzEwMTVhYTAwMmJjOTJkNDYiLCJpYXQiOjE2NDY0NDIwNzR9.tYrfM01nYSVwj7GVljHUXgLkuLx9fKDyQanoZ8PUvfQ");

  getAxiosInstanceApi().get("getProfile").then((res)=>{
    const data = res.data;
    callback(true,data);
  }).catch((err)=>{
    const error = err.message;
    callback(false, error);
  })
}

export const sendTweet = (data, callback)=>{
  localStorage.setItem("x-auth-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjYxYjg2MzEwMTVhYTAwMmJjOTJkNDYiLCJpYXQiOjE2NDQ3NjYzNzh9.E5-GqPix6SQlJmtXdyFqiFmtf7o9g8xVd3dtcTmry_E");

  getAxiosInstanceApi().post("newTweet",data).then((res)=>{
    const data = res.data;
    callback(true,data);
    
  }).catch((err)=>{
    callback(false,err)
  });
}


export const likeTweet = (id,callback)=>{
  getAxiosInstanceApi().get("likeTweet/"+id).then((res)=>{
    const data = res.data;
    callback(true,data);
  }).catch((err)=>{
    callback(false,err);
  })
}