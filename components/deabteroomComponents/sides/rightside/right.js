import TeamMember from './rightteamusers'
import Link from "next/link"
import styles from "../../../leftSide/leftSide.module.css"
import { Button } from '@material-ui/core'
import ChooseTeam from '../../chooseteam/chooseteam'
import Boxes from "../../Boxes"
import { useRouter } from 'next/router'

export default function rightSide({topic,users,totalUser}) {
const router=useRouter()
    return (
      <div className="containerLeft relative">
      
      <div className="pl1 pr05 w100 sticky debateRoomLeftSidePosition">
              <div className="w100">
            <div className="w100 boxColor mt1 mb1 pl1 pr1 pb1 border-radius5px box-shadow">
                
                <div className="center mb1">
               {topic}
                </div>      

                {users.map(user=><TeamMember score={user.score} username={user.username}></TeamMember>)}  
                
               </div>
              
                  
              </div>
              <Boxes title={"Total user"} content={totalUser}/>
                 <div onClick={()=>router.push("/")} className="center w100"> <div  className="exitRoom center  needHover w100"> Exit Room </div> </div>
          </div>
      </div>
    );
  }