import React from 'react'
import Arrow from '../../../icons/arrow.png'
import LeftDude from '../../../icons/leftdude.jpg'
import ProfilePhoto from '../../../images/profilephoto.jpg'
export default function left() {
    return (
        <div className="mainLeft column relative">
                    <div className="mainSidesTop center">
                        <div className="teamName center">
                        <img className="leftsideArrow " src={Arrow} alt=""/>
                        </div>
                                

                          
                    </div>
                    <div className="mainSideMiddle center p1">
                           <img src={LeftDude} alt=""/>
                            <div className="middleUsers">

                            </div>
                    </div>
                    <div className="leftBottom column w100">
                        <div className="members row mt05 ">
                        <div className="userphoto center">
                        <img src={ProfilePhoto} alt=""/>
                        </div>
                             <div className="bilgi column w100 flex-start relative">
                                    <h4>
                                        Kanan Gasimov
                                    </h4>
                                    <p>
                                        Buura aminakoya bilirmiyim?
                                    </p>
                                    <span className="timePosition">07:42</span>
                             </div>
                        </div>
                        <div className="members row mt05">
                        <div className="userphoto center">
                        <img src={ProfilePhoto} alt=""/>
                        </div>
                             <div className="bilgi column w100 flex-start relative">
                                    <h4>
                                        Enes Bugra Canaque
                                    </h4>
                                    <p>
                                        Tabiki abi her zaman
                                    </p>
                                    <span className="timePosition">07:42</span>
                             </div>
                        </div>
                        <div className="members row mt05">
                        <div className="userphoto center">
                        <img src={ProfilePhoto} alt=""/>
                        </div>
                             <div className="bilgi column w100 flex-start relative">
                                    <h4>
                                        Orkun Mert Yigit
                                    </h4>
                                    <p>
                                        Buura binance dan yatira biliyonmu?
                                    </p>
                                    <span className="timePosition">07:42</span>
                             </div>
                        </div>
                        <div className="members row mt05">
                        <div className="userphoto center">
                        <img src={ProfilePhoto} alt=""/>
                        </div>
                             <div className="bilgi column w100 flex-start relative">
                                    <h4>
                                        Melih Gunay
                                    </h4>
                                    <p>
                                        Bu ne aq
                                    </p>
                                    <span className="timePosition">07:42</span>
                             </div>
                        </div>

                    </div>
                </div>
    )
}
