import React from "react";
import Dots from "../../icons/dots.png";

const trendBox = ({ user, followed, follow, myuser }) => {
  return (
    <div className="trendColum flex-start column w100 relative border-bottom p1">
      <div className="row w100 space-between">
        <div className="row">
          <div className={`Blackk mr1 center`}>{user}</div>
        </div>
        {followed ? (
          <div className="followButton row center" onClick={()=>follow()}>follow</div>
        ) : (
          <div className="followedButton row center" onClick={()=>follow()}>followed</div>
        )}
      </div>
    </div>
  );
};
export default trendBox;
