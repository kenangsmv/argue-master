import React from 'react'
import Sent from '../../../icons/sent.png'

export default function messagenew() {
    return (
        <div className="mainMiddle">
            <div className="newMessageBody  space-between column">
        <div className="mainMiddleTop relative">
                <div className="topicNameBody row">
                <h3 className="topicName mr05 center">Iphone</h3>
                <h3 className="topicName center">Samsung</h3>
                </div>
         </div>
         <div className="mainMiddleMessage">
        
         </div>
         <div className="middleBottom row  center">
              
             <input type="text" placeholder="Write your message.."/>
             <div className="sentButton center">
             <img  src={Sent} alt=""/>
             </div>
         </div>
        </div>
        </div>
    )
}
