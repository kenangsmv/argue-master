import React from "react"
import styles from "./navbar.module.css";
import Logo from "../../icons/logo.svg";
import Input from "../elements/input";
import Profil from "../../icons/arsenal.png";
import Cookie from "js-cookie";
import Vs from "../deabteroomComponents/vs/versus"
import { Button } from "@material-ui/core";
import Modal from "../Modal/Modal"
import Link from "next/link"
import AuthLayout from "../auth/layout"
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router'
const Navbar = () => {
  const router=useRouter()
  const user = useSelector((state) => state.user.currentUser);
  const open = useSelector((state) => state.layout.auth_modal);
  const dispatch = useDispatch();
  const openAuthModal = () => {
    dispatch({ type: "SET_MODAL", payload: true });
  };
  const closeAuthModal = () => {
    dispatch({ type: "SET_MODAL", payload: false });
  };
  const logout = () => {
    Cookie.set("currentUser",null)
    dispatch({ type: "REMOVE_USER", payload: null });
  };

  

  console.log(open);
  
  const change =()=>{
      setOpen(!open);
  };
  

  return (
    <div className={"navbarContainer row between "}>
       <Modal open={open} Comp={AuthLayout} cancel={closeAuthModal}></Modal>
      <div onClick={()=>router.push("/trends/Music")} className={"logo needHover "}>
        <img className=""  src={Logo} alt="" />
      </div>
      <div className={"searchBox"}>
        <Input></Input>
      </div>
      {user ? (
        <div className={"menus row center"}>
          <Link  href={`/user/${user.username}`} className="p1 h100 center needHover">{user.username}</Link>
          <h5 className="p1 h100 borderLeft center needHover followButton ml1">Create</h5>
          <h5 onClick={logout} className="p1 h100 borderLeft center needHover">Logout</h5>
        </div>
      ) : (
        <div className={"menus row center"}>
          <Button variant="contained" color="secondary" onClick={openAuthModal}>
            Sign in
          </Button>
        </div>
      )}
    </div>
  );
};
export default Navbar;
