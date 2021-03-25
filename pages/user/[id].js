import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

import ProfileFlow from "../../components/flow/userprofileflow";

import { myDebates,follow } from "../../actions/requests";

import Profile from "../../images/user2.jpg";
import {useSelector,useDispatch} from "react-redux"

export async function getServerSideProps({ query }) {
  console.log(query, "query");
  console.log("idddd", query.id);

  const res = await myDebates(query.id);

  const data = await res.data.data;
  console.log("res data", res.data);

  // Fetch data from external API
  let available = data ? true : false;

  // Pass data to the page via props
  return { props: { debates: data.debate, user: data.user } };
}

export default function Home({ debates, isProfile ,user}) {
  
const [to_user,setUser]=React.useState(user)


const myUser=useSelector(state=>state.user.currentUser)
const dispatch=useDispatch()
const followToggle=async ()=>{
try {
  await follow({my_username:myUser.username,to_username:user.username},(my,to)=>{
    dispatch({type:"ADD_USER",payload:my})
setUser(to)
  })
} catch (error) {
  console.log(error)
}
}




const checkFollowed=myUser?.followed.includes(user.username)

  return (
    <div className={styles.container}>
      <div className={styles.homeContainer}>
        <div className="profileMiddle">
          <div className="topContainer center">
            <div className="profileImageContainer center ">
              <img src={Profile} alt="" />
            </div>
          </div>
          <div className="bottomContainer relative">
            <div className="column center">
              <h3>{user.username}</h3>
             {
               myUser&&(
                 checkFollowed?( <div className="followedButton center needHover mt05" onClick={followToggle}>followed</div>):( <div onClick={followToggle} className="followButton center needHover mt05">follow</div>)
                 
               )
             }
            </div>

            <div className="informationDesk w100 center mt05 ">
              <ul>
                <li className=" border-right center">
                  <span>{user.debates?.length} Debate </span>
                </li>
                <li className=" border-right center">
                  <span>{to_user.followers?.length} Followers </span>
                </li>
                <li className=" center">
                  <span>{to_user.followed?.length}  Following </span>
                </li>
              </ul>
            </div>
            <hr />

            <div className="center column mt2 ">
             

              <ProfileFlow isProfile={true} debates={debates}></ProfileFlow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
