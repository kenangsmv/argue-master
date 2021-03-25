import React from "react";
import Dots from "../../icons/dots.png";

const trendBox = () => {
  return (
    <div className="trendColum flex-start column w100 relative border-bottom p1">
      <div className="row w100 space-between">
        <div className="row">
        <div className={ `Blackk mr1 center`}> İphone</div>
        <div className={ `Music  center`}> Samsung</div>
        </div>
        <div className="postCardLive row center">
          <div className="redCircle"></div>
          <span>150</span>
        </div>
        
      </div>
    
      <div className="row w100 space-between m1">
      <span className={"op06"}>55 message</span>
        <div></div>
      
      </div>
    </div>
  );
};
export default trendBox;
