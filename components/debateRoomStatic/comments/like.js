import React from "react";
import { Button } from "@material-ui/core";
import HappyFace from "../../../icons/happy.png";
import LikeVote from "../../../icons/vote.png";
import Angry from "../../../icons/angry.png";
import AngryFace from "../../../icons/angry.png";
import HandShake from "../../../icons/handshake.png";
import Vote from "../../../icons/vote.png";

export default function like({ id, like, angry, isLiked, isAngry, message }) {
  return (
   
      
     
 <ul>
           
             
 <div className="wrapped nobullet voteButtonAbsolute column">
{!isLiked && !isAngry ? (

  <div >
    <div className=" mr05 underline">Vote</div>
    <div className="content  row pl05 pr05">
      <img
        className="vote-icons needHover"
        onClick={() => like(id)}
        src={Vote}
        alt=""
      />

      <img
        className="vote-icons needHover"
        onClick={() => angry(id)}
        src={AngryFace}
        alt=""
      />
      </div>
   
    
  
</div>
) : (
<img
  className="vote-icons needHover"
  onClick={() => {
    isLiked ? like(id) : angry(id);
  }}
  src={isLiked ? Vote : AngryFace}
  alt=""
/>
)}
</div>



</ul>
      
    
   
  );
}