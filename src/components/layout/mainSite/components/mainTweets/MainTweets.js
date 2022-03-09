import "./mainTweets.css";
// import { LoadTweets } from "../../../../api/ApiTweets";
import Tweet from "./components/tweet/Tweet";

const MainTweets = ({ tweetList }) => {
  // console.log(tweetList);

  return (
    <div>
      <div className="mainTweets my-2">
        {tweetList.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default MainTweets;
