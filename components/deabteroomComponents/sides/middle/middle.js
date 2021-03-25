import Vs from "../../vs/versus";
import React, {useRef} from "react"
import styles from "../../../flow/flow.module.css";
import Message from "../../comments/message";
import PostContent from "./poscontent";
import TextComponent from "./TextComponent";
import { useEffect } from "react";
export default function DebateRoom({
  messages,
  sendMessage,
  debate_info,
  mySide,
  like,
  checkUser,
  angry,
  scores,

}) {
  const messagesEndRef = useRef(null)
  console.log("refffffffffff",messagesEndRef)
  const scrollToBottom = () => {
    console.log("buraya girdi new message",messagesEndRef)
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
  scrollToBottom()

  }, [messages])






  return (
    <div className={"liveRoomMiddle relative "}>
      <Vs scores={scores}></Vs>

      <PostContent debate_info={debate_info}></PostContent>

      <div  className="liveMessageBody">
        {messages.map((message) => (
          <Message
            message={message}
            mySide={mySide}
            like={like}
            angry={angry}
          ></Message>
        ))}

        <div ref={messagesEndRef} ></div>
      </div>
      <TextComponent
          checkUser={checkUser}
          sendMessage={sendMessage}
        ></TextComponent>
    </div>
  );
}
