import React from "react"
import Head from "next/head";
import styles from "../../styles/Home.module.css";

import LeftSide from "../../components/leftSide/leftSide";
import Flow from "../../components/flow/TrendFlow";
import RightSide from "../../components/rightSide/rightSide";

import { getTrends} from "../../actions/requests";
import { useRouter } from "next/router";
import Slider from "../../components/Slider/slider"


export async function getServerSideProps({ query }) {
  console.log(query, "query");
  console.log("idddd", query.id);

  const res = await getTrends(query.id);

  const data = await res.data.data;
  console.log("res data",res.data)

  // Fetch data from external API
  let available = data ? true : false;

  // Pass data to the page via props
  return { props: { debates: data } };
}

export default function Home({ debates}) {


  return (

    <div className={styles.container}>
        

    <div className={styles.homeContainer}>
      <LeftSide></LeftSide>

      <Flow debates={debates}></Flow>
      <RightSide></RightSide>
    </div>
  </div>

  );
}
