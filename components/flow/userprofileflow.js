import React, { useState, useEffect } from "react";

import PostCard from "../post/postcard.js";
import CreateDebate from "../post/createdebate";
import Slider from "../Slider/profileSlider";

function flow({ debates, isProfile }) {
  return (
    <div className="w90">
      {!debates ? (
        <div>yükleniyor</div>
      ) : (
        <div
          className={`w100 center column  ${
            isProfile ? "" : "border-left border-right "
          }`}
        >
          <Slider debates={debates}></Slider>
        </div>
      )}
    </div>
  );
}

export default flow;
