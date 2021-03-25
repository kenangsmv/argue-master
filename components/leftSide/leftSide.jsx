import React from "react";
import styles from "./leftSide.module.css";
import News from "../../icons/news-feed.svg";
import Messages from "../../icons/message.png";
import Watch from "../../icons/watch.png";
import MarketPlace from "../../icons/marketplace.png";
import Fundraiser from "../../icons/fundraiser.png";
import Pages from "../../icons/pages.png";
import Groups from "../../icons/groups.png";
import Events from "../../icons/events.png";
import Saved from "../../icons/bookmark.png";
import FollowBox from "../FollowBoxes/followBox";
import { follow } from "../../actions/requests";
import { useSelector, useDispatch } from "react-redux";

export default function leftSide() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const checkFollow = (name) => {
    return user.followed.includes(name);
  };

  const followToggle = async (name) => {
    try {
      await follow(
        { my_username: user.username, to_username: name },
        (my, to) => {
          dispatch({ type: "ADD_USER", payload: my });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.containerLeft}>
      <div className="leftsideSticky">
        <div className={"LeftFirstBox column"}>
          <div className={"LeftSubMenu row test"}>
            <img className="icons" src={News} alt="" />
            <span>News Feed</span>
            <span className="Music">soon</span>
          </div>
          <div className={"LeftSubMenu row"}>
            <img className="icons" src={Messages} alt="" />
            <span>Messages</span>
            <span className="Music">soon</span>
          </div>
          <div className={"LeftSubMenu row"}>
            <img className="icons" src={Saved} alt="" />
            <span>Saved</span>
            <span className="Music">soon</span>
          </div>
          <div className={"LeftSubMenu row"}>
            <img className="icons" src={Events} alt="" />
            <span>Trends</span> 
           
          </div>
        </div>

        {user && (
          <div className={"LeftSecondBox center column"}>
            <FollowBox
              followed={checkFollow("skrite15")}
              user="skrite15"
              follow={()=>followToggle("skrite15")}
            ></FollowBox>
            <FollowBox
              followed={checkFollow("skrite15")}
              user="skrite15"
              follow={()=>followToggle("skrite15")}
            ></FollowBox>
          </div>
        )}
      </div>
    </div>
  );
}
