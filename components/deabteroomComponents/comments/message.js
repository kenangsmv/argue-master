import User from "../../../images/user3.jpg";

import Dots from "../../../icons/whitedots.png";
import LikeVote from "../../../icons/vote.png";
import Angry from "../../../icons/angry.png";
import Like from "./like";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
export default function DebateRoom({ message, like, angry, whatIsMySide }) {
  const user = useSelector((state) => state.user.currentUser);
  
  
  const calculateScore = () => {
    return message.likes.length - message.angry.length;
  };
  const isLikedOrAngry = () => {
    let isLiked = message.likes.includes(user.username);
    let isAngry = message.angry.includes(user.username);

    return { isLiked, isAngry };
  };

  const { isLiked, isAngry } = user
    ? isLikedOrAngry()
    : { isLiked: null, isAngry: null };
  return (
    <div>
      <div className="w100 row pt1"></div>
      <div
        className={`user ${
          message.direction ? "row" : "row-reverse"
        } pt1 messageArea`}
      >
        <div className="pr05">
          <img className="image" src={User} alt="" />
        </div>
        <div className="messageBox messageboxColor pl1 pr1 pt05  border-radius15px box-shadow text-align-justify relative">
          <div>
            <h5>{message.message_holder}</h5>
          </div>

          <div>
            <span>{message.message}</span>
          </div>

          <div className="voteButtonAbsolute">
            <Like   id={message.id} side={message.side} like={like} angry={angry} isLiked={isLiked} isAngry={isAngry} ></Like>
          </div>
        
         
            <div className="result resultAbsolute row center box-shadow">
              
              
                
   <img className="result-icons" src={LikeVote} alt=""/> 
    {message.likes.length}
           
               
                  
   <img className="result-icons" src={Angry} alt=""/> {message.angry.length}
    
            </div> 

         
          <img className="vote-dots" src={Dots} alt="" />
        </div>
      </div>
    </div>
  );
}
