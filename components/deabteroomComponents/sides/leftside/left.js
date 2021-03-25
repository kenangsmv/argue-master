import TeamMember from "./leftteamusers";

import styles from "../../../leftSide/leftSide.module.css";
import ChooseTeam from "../../chooseteam/chooseteam";
import Boxes from "../../Boxes"
export default function lefside({topic,users}) {
  return (
    <div className={styles.containerLeft}>
      <div className="pl1 pr05 w100 sticky">
        
        <div className="w100 boxColor mt1 mb1 pl1 pr1 pb1 border-radius5px box-shadow">
          <div className="center mb1">
        {topic}
          </div>

         {users.map(user=><TeamMember score={user.score} username={user.username}></TeamMember>)}
        </div>

        <Boxes title={"Remaining time"} content={"13:55"}  />
      </div>
    </div>
  );
}
