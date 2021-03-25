import TeamMember from "./leftteamusers";
import {Button} from "@material-ui/core"
import styles from "../../../leftSide/leftSide.module.css";
import ChooseTeam from "../../chooseteam/chooseteam";
import Boxes from "../../Boxes"
import moment from "moment"
import Link from "next/link"
import {useRouter} from "next/router"
export default function lefside({topic,users,holder,id}) {
  console.log(id)
 const router=useRouter()
 
  return (
    <div className={styles.containerLeft}>
      <div className="pl1 pr05 w100 sticky">
        
        <div className="w100 boxColor mt1 mb1 pl1 pr1 pb1 border-radius5px box-shadow">
          <h2 className="center p1">
        {topic}
          </h2>

         {users.map(user=><TeamMember score={user.score} username={user.username}></TeamMember>)}
        </div>

        <Boxes title={"Room holder"} content={holder}  />
        <Button onClick={()=>router.push(`/live/${id}`)} className="mt2" fullWidth variant="contained" color="secondary">Join</Button>
      </div>
    
    </div>
  );
}
