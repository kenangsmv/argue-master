import Vs from "../../vs/versus";
import React, {useRef} from "react"
import styles from "../../../flow/flow.module.css";
import Message from "../../comments/message";
import PostContent from "./poscontent";
import TextComponent from "./TextComponent";
import { useEffect } from "react";
import {Button} from "@material-ui/core"
export default function DebateRoom({
  messages,
  
  debate_info,
  
  like,
  
  angry,
  scores,

}) {

 
  return (
    <div className={"liveRoomMiddle relative "}>
       <PostContent debate_info={debate_info}></PostContent>
      <Vs scores={scores}></Vs>

     

      <div  className="liveMessageBody">
        {messages.map((message) => (
          <Message
            message={message}
          
            like={like}
            angry={angry}
          ></Message>
        ))}

        
      </div>
    
    </div>
  );
}
