import "../styles/globals.css";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";


import Navbar from "../components/navbar/navbar";
import Cookie from "js-cookie";
import { initializeStore } from "../redux/store";
import cookieServer from "cookie";




MyApp.getInitialProps= async ({ctx})=> {
  const req=ctx.req
 const reduxStore = initializeStore();
 const { dispatch } = reduxStore;

try {
  
 const cookies =  cookieServer.parse(req ? req.headers.cookie || "" : document.cookie);
 if(Object.entries(cookies).length !== 0)
 dispatch({
   type: "ADD_USER",
   payload: JSON.parse(cookies.currentUser),
 });

} catch (error) {
  
}

 console.log("alooooooooooooooooooooooooooooooooo")

 return {
   pageProps: { initialReduxState: reduxStore.getState() } 
  } // will be passed to the page component as props
 
}






function MyApp({ Component, pageProps }) {
  console.log("page props",pageProps)
  const store = useStore(pageProps.initialReduxState);
  
  return (
    <Provider store={store}>
    
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

