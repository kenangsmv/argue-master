import React from 'react'
import Logo from '../../../icons/logo.svg'
import Home from '../../../icons/home.png'
import Trending from '../../../icons/fire.png'
import Saved from '../../../icons/bookmark.png'
import ProfilePhoto from '../../../images/profilephoto.jpg'
export default function navbar() {
    return (
        <div className="newNavbar column space-between">
                   
        <img className="newnavbarlogo" src={Logo} alt=""/>
        
        <div className="newNavbarMenu column center">
            <div className=" center">
                <img className="newicons" src={Home} alt=""/>
                </div>
                <div className=" center">
                <img className="newicons" src={Trending} alt=""/>
                </div>
                <div className=" center">
                <img className="newicons" src={Saved} alt=""/>
                </div>
        </div>
        <div className="newNavbarButtom ">
                 <img src={ProfilePhoto} alt=""/>
        </div>
        </div>
    )
}
