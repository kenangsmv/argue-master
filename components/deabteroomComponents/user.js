import React from 'react'
import User from '../../images/user2.jpg'
export default function user({user}) {
    return (
      
        <div className="w100 mt05 row space-around">
          <img className="modalteamImages" src={User} alt=""/>
          <span className="center pl05 black" >{user.username}</span>
          <span className="center pl05 black" >{user.score}</span>
        </div>
        
    )
}
