import Head from "next/head";
import styles from "../styles/Home.module.css";

import Navbar from "../components/navbar/navbar";
import LeftSide from "../components/leftSide/leftSide";
import Flow from "../components/flow/flow";
import RightSide from "../components/rightSide/rightSide";
import { getDebate } from "../actions/requests";
import { initializeStore } from "../redux/store";
import cookieServer from "cookie";
export async function getServerSideProps({req}) {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
console.log("redux store ", reduxStore)
const cookies =  cookieServer.parse(req ? req.headers.cookie || "" : document.cookie);
console.log("cookieee",cookies)

try {
  if(Object.entries(cookies).length !== 0)
dispatch({
  type: "ADD_USER",
  payload: JSON.parse(cookies.currentUser),
});
} catch (error) {
  
}


  const res = await getDebate();

  const data = await res.data.data;

  // Fetch data from external APIz

  dispatch({
    type: "SET_DEBATES",
    payload: data,
  });

  // Pass data to the page via props
  return { props: { initialReduxState: reduxStore.getState() } };
}

export default function Home(props) {
  return (
    <div className={styles.container}>
        

      <div className={styles.homeContainer}>
        <LeftSide></LeftSide>

        <Flow></Flow>
        <RightSide></RightSide>
      </div>
    </div>
  );
}
