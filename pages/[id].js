import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import LeftSide from "../components/debateRoomStatic/sides/leftside/left";
import MiddleSide from "../components/debateRoomStatic/sides/middle/middle";
import RightSide from "../components/debateRoomStatic/sides/rightside/right";
import { getOneDebate } from "../actions/requests";
import { useRouter } from "next/router";

export async function getServerSideProps({ query }) {
  console.log(query, "query");
  console.log("idddd", query.id);

  const res = await getOneDebate(query.id);

  const data = await res.data.data;
  console.log("res data", res.data);

  // Fetch data from external API
  let available = data ? true : false;

  // Pass data to the page via props
  return { props: { room_info: data, available } };
}

export default function Home({ room_info, available }) {
  const router = useRouter();
  const [pageCondition, setPageCondition] = React.useState(false);

  const [state, setState] = useState(room_info);

  const [messages, setMessages] = useState(room_info.messages);
  const calculateScore = () => {
    const { topic1, topic2 } = state ? state : {};
    let topic1Score = 0;
    let topic2Score = 0;

    state.messages.map((message) => {
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

  const seperateUser = (topic) => {
    let separeted_arr = [];

    state.messages?.map((message) => {
      console.log(message)
     if(message.side===topic){
      let isCreated = separeted_arr.find(
        (user) => user.username === message.message_holder
      );

      if (isCreated) {
        isCreated.score = isCreated.score + message.likes.length - message.angry.length;
        isCreated.num=isCreated.num+1
      } else {
        separeted_arr.push({
          username: message.message_holder,
          score: message.likes.length - message.angry.length,
          side: message.side,
          num:1
        });
      }

     }
    });
    console.log("separated", separeted_arr);
    return separeted_arr

    
  };

  
  const { topic1, topic2 } = state ? state : {};

  console.log("static roomdaki state", state);
  return (
    <div>
      <div className="debateRoom w100 center column">
        <div className={styles.homeContainer}>
          <LeftSide users={seperateUser(topic1)} topic={topic1}  holder={state.post_holder_username} id={state.string_id}/>
          <MiddleSide
            debate_info={state}
            messages={state.messages}
            scores={calculateScore()}
          />
          <RightSide
           users={seperateUser(topic2)}
            topic={topic2}
            totalUser={state.user_count}
           
          />
        </div>
      </div>
    </div>
  );
}
