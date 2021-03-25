import Head from "next/head";
import Navbar from "../components/navbar/navbar"
import styles from "../styles/Home.module.css";
import LeftSide from '../components/deabteroomComponents/sides/leftside/left'
import MiddleSide from '../components/deabteroomComponents/sides/middle/middle'
import RightSide from '../components/deabteroomComponents/sides/rightside/right'
export default function DebateRoom() {
    return (
        <div className={styles.container}>
        <Navbar></Navbar>
  
        <div className={styles.homeContainer}>
                  <LeftSide></LeftSide>
                  <MiddleSide></MiddleSide>
                  <RightSide></RightSide>
        </div>
      </div>
     
      
    );
  }
  