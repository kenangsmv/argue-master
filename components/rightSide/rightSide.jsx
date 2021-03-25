import React from "react";
import styles from "./rightSide.module.css";
import Trends from "../Trends/trendsBar";
import User1 from "../../images/user1.jpg";
import User2 from "../../images/user2.jpg";
import User3 from "../../images/user3.jpg";
import Slider from "../Slider/DynamicSlider";

export default function rightSide() {
  return (
    <div className={styles.rightContainer}>
      <div className={styles.top}>
        <div className={"winners column center box-shadow"}>
          <h5 className={"p1"}>Best Debaters</h5>

          <div className={"winners-list"}>
            <Slider
             slide_array={[
                <div className="center column">
                  <img className={"image"} src={User3} alt="" aria-label />
                  <div className={`Music mr1 center`}>skrite15</div>
                </div>,
                <div className="center column">
                  <img className={"image"} src={User3} alt="" aria-label />
                  <div className={`Music mr1 center`}>skrite15</div>
                </div>,
                  <div className="center column">
                  <img className={"image"} src={User3} alt="" aria-label />
                  <div className={`Music mr1 center`}>skrite15</div>
                </div>,
                  <div className="center column">
                  <img className={"image"} src={User3} alt="" aria-label />
                  <div className={`Music mr1 center`}>skrite15</div>
                </div>
              ]}
            ></Slider>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Trends></Trends>
      </div>
    </div>
  );
}
