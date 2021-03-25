
import Profile from "../../images/user1.jpg";

import Voting from "../post/voting";
import moment from "moment";

import VS from "../deabteroomComponents/vs/versus";

const Postcard = ({ data }) => {
  const calculateScore = () => {
    const { topic1, topic2 } = data ? data : {};
    let topic1Score = 0;
    let topic2Score = 0;

    data.messages.map((message) => {
      if (message.side === topic1) {
        topic1Score =
          topic1Score + (message.likes.length - message.angry.length);
      }
      if (message.side === topic2) {
        topic2Score =
          topic2Score + (message.likes.length - message.angry.length);
      }
    });

    console.log({ topic1Score, topic2Score, topic1, topic2 });

    return { topic1Score, topic2Score, topic1, topic2 };
  };

  return (
    <div className={"postCard boxColor column p1 mb1 box-shadow"}>
      <div className={"post w100 relative"}>
        <div className="postCardLive row center">
          <div className="redCircle"></div>
          <span> {data.user_count > 0 ? data.user_count : 0}</span>
        </div>
        <div className={"postTop w100"}>
          <div className={"topConent boxColor row center"}>
            <img className={"image"} src={Profile} alt="" />
            <div className="topTextContent w100 column pl05">
              <h5>{data.post_holder_name} </h5>

              <time>{moment(data.createdAt).fromNow()}</time>
            </div>
          </div>
        </div>
        <div className={"postText w100"}>
          <span className={"p1"}>{data.title}</span>
        </div>
        <Voting
          data={{
            topic1: data.topic1,
            topic2: data.topic2,
            id: data.string_id,
            categories: data.categories,
          }}
        ></Voting>

        <div className={" w100 mt1"}>
          <VS scores={calculateScore()}></VS>
        </div>
      </div>
    </div>
  );
};
export default Postcard;
