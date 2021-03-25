import React from "react";
import { Button, TextField } from "@material-ui/core";
import sentIcon from "../../../../images/back.png";
export default function TextComponent({ sendMessage,checkUser }) {
  const [message, setMessage] = React.useState("");
  const sent = () => {
    sendMessage(message);
    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sent();
    }
  };
  console.log(message);
  return (
    
      <div className="w100 relative ">
        <div className="boxColor radiusBottom textHeight center ">
          <TextField
            fullWidth
            disabled={!checkUser}
            placeholder={checkUser?"write your argue !":"you should select a side to write your argue "}
            className={"relative"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          ></TextField>
          <img
            onClick={sent}
            className="sentIcon needHover"
            src={sentIcon}
          ></img>
        </div>
      </div>
    
  );
}
