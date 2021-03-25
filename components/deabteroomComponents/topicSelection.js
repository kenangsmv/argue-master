import { Button } from '@material-ui/core'
import React from 'react'
import User from './user'

export default function topicSelection({joinDebate,room_info,filteredUser}) {
    const {topic2,topic1}=room_info
    console.log(room_info)
    return (
        <div className="center column">
            <div className="w100 row center mb2 mt2">
                <div className="column column-flex-start mr1">
          
            <div className="w100 team white column relative" onClick={()=>joinDebate(topic1)} >
         
         <Button onClick={()=>joinDebate(topic1)} variant="contained" color="secondary">{topic1}</Button>
        
            <div className="teamusersAbsolute w100">
          {filteredUser?.topic1.map(user=><User user={user}/>)}
           
            </div>           
            </div>
            </div>
            <div className="column column-flex-start">
        
            <div className="w100 team white column relative"  onClick={()=>joinDebate(topic1)} >
            <Button onClick={()=>joinDebate(topic2)} variant="contained" color="secondary">{topic2}</Button>
            <div className="teamusersAbsolute w100">
            {filteredUser?.topic2.map(user=><User user={user}/>)}
           
            </div>           
            </div>
            </div>
             </div>
            <div  onClick={()=>joinDebate()} variant="contained" color="primary" className="exitRoom center w20"> Watch As Guest </div>
         
        </div>
    )
}
