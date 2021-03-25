import React from 'react'
import RightDude from '../../../icons/rightdude.jpg'
import Arrow from '../../../icons/arrow.png'
export default function right() {
    return (
        <div className="mainRight  column relative">
        <div className="mainSidesTop center">
                <div className="teamName center">
                <img className="rightsideArrow " src={Arrow} alt=""/>
                </div>
                       
                  
            </div>
            <div className="mainSideMiddle center p1">
                   <img src={RightDude} alt=""/>

            </div>
            
                 <button className="rightBottom">
                     Exit room
                 </button>
            
        </div>
    )
}
