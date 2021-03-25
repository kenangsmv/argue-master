import React from "react";

export default function poscontent({debate_info}) {
    console.log(debate_info)
  return (
    
      <div className="livePostConent box-shadow topicTitle boxColor  w100 p1 mt05 text-align-justify ">
        <h1 className="mb1 w100">
          {" "}
       {debate_info.title}
        </h1>
      </div>
    
  );
}
