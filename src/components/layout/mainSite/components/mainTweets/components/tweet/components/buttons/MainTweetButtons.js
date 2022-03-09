import React, { useEffect, useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { loadLikesRequestServer } from "../../../../../../../../../redux/apiRedux/loadTweetsRedux/actions";
import { likeTweet } from "../../../../../../../../api/ApiTweets";
import "./mainTweetButtons.css";


const MainTweetButtons = ({ tweeterLikes }) => {
  const [likes, setLikes] = useState(tweeterLikes.likes);

  const dispatch = useDispatch();
  // dispatch(loadLikesRequestServer(tweeterLikes._id))
  const likesDataRedux = useSelector(state=>state.like)
  console.log(likesDataRedux);

  const handleLikeClick = () => {

    likeTweet(tweeterLikes._id, (isOk, data) => {
      if (!isOk) {
        return;
      }
      const dataLike = data.likes;
      console.log(dataLike);
    });
    setLikes(likes + 1);
  };

  return (
    <div>
      <div className="mainTweetsButtons my-3">
        <div className="retweetButton cursor-pointer me-3">
          <i className="bi bi-arrow-repeat m-0 p-0"></i>
        </div>
        <button className="likeButton cursor-pointer" onClick={handleLikeClick}>
          <i className="bi bi-heart-fill m-0 p-0"></i>
        </button>
        <div className="likeCountButton d-flex justify-content-center align-items-center ms-1 text-muted fs-5">
          <p className="p-0 m-0">{likes}</p>
        </div>
      </div>
    </div>
  );
};

export default MainTweetButtons;
