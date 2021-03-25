import React, { useState } from "react";

import Profile from "../../images/user3.jpg";
import Modal from "../Modal/Modal";
import CreatePost from "./createPost";

export default function createdebate() {
  const [open, setOpen] = useState(false);

  const change = () => {
    setOpen(!open);
  };

  return (
    <div className={"w100 center"}>
      <div onClick={change} className="createDebate center mb1 needHover w80">
        Deabte Olustur
      </div>
      <Modal
        open={open}
        Comp={CreatePost}
        cancel={change}
      ></Modal>
    </div>
  );
}
