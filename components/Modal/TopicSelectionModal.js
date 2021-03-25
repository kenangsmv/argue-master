import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { Button } from "@material-ui/core";
import CloseIcon from "../../icons/close.png";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    
    position:"absolute",
   
    
    border: "none",
  },
}));

export default function SimpleModal({ open, cancel,Comp ,joinDebate,room_info,filteredUser}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div className="test">
      <Modal
        style={{
          overflowY: "auto",
          alignSelf: "center",
       
          
        }}
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div
          style={modalStyle}
          className={`${classes.paper} responsive-w-100 relative topicSelectionModal`}
        >
          {<Comp cancel={cancel} joinDebate={joinDebate} room_info={room_info} filteredUser={filteredUser}></Comp>}

       
        </div>
      </Modal>
    </div>
  );
}
