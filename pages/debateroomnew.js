import React from 'react'
import Sent from '../icons/sent.png'
import Logo from '../icons/logo.svg'
import Home from '../icons/home.png'
import Trending from '../icons/fire.png'
import Arrow from '../icons/arrow.png'
import Saved from '../icons/bookmark.png'
import LeftDude from '../icons/leftdude.jpg'
import RightDude from '../icons/rightdude.jpg'
import ProfilePhoto from '../images/profilephoto.jpg'
import NewMessage from '../components/newdebateroomcomp/comments/mesaagenew' 
import Navbar from '../components/newdebateroomcomp/newnavbar/navbar'
import Left from '../components/newdebateroomcomp/sides/left'
import Right from '../components/newdebateroomcomp/sides/right'

export default function debateroomnew() {
    return (
        <div className="newdebateroomLayout center" >
              
           <div className="newdebateroomBody">
            <Navbar></Navbar>
               <div className="bigRight row center  ">
               <Left></Left>
                <NewMessage></NewMessage>
                <Right></Right>
               
               </div>

           </div>

        </div>
    )
}
