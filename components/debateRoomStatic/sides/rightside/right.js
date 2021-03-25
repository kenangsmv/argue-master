import TeamMember from './rightteamusers'

import Boxes from "../../Boxes"
import { useRouter } from 'next/router'

export default function rightSide({topic,users,totalUser}) {
const router=useRouter()
    return (
      <div className="containerLeft relative">
      
      <div className="pl1 pr05 w100 sticky debateRoomLeftSidePosition">
              <div className="w100">
            <div className="w100 boxColor mt1 mb1 pl1 pr1 pb1 border-radius5px box-shadow">
                
                <h2 className="center p1">
               {topic}
                </h2>      

                {users.map(user=><TeamMember score={user.score} username={user.username}></TeamMember>)}  
                
               </div>
              
               <Boxes title={"Users joined"} content={totalUser}/>
              </div>
             
              <div onClick={()=>router.push("/")} className="center w100"> <div  className="exitRoom center  needHover w100"> Exit Room </div> </div>
          </div>
      </div>
    );
  }