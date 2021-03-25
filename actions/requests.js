import axios from "axios";
import Cookie from "js-cookie";
const url = "https://argue-backend.herokuapp.com";
 //const url = "http://localhost:5000";
const serverless= "http://localhost:3000/api"
export const newDebate = async (data, callback) => {
  try {
    const res = await axios({
      method: "post",
      url: url + "/debate/add-debate",
      data: data,
    });
    console.log(res)

    callback(res.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const newUser = async (data, callback) => {
  try {
    const res = await axios({
      method: "post",
      url: url + "/auth/register",
      data: data,
    });
    let user={...res.data.user,token:res.data.token}
    Cookie.set("currentUser", JSON.stringify(user));
   callback(user);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data, callback) => {
  try {
    const res = await axios({
      method: "post",
      url: url + "/auth/login",
      data: data,
    });
    let user={...res.data.user,token:res.data.token}
    Cookie.set("currentUser", JSON.stringify(user));
   callback(user);
  } catch (error) {
    console.log(error);
  }
};


export const follow = async (data, callback) => {
  try {
    const res = await axios({
      method: "post",
      url: url + "/follow/follow-toggle",
      data: data,
    });
    console.log("response",res)
   
  callback(res.data.data.my,res.data.data.to);
  } catch (error) {
    console.log(error);
  }
};



export const getDebate = async (data) => {
  return await axios({
    method: "get",
    url: serverless + "/getDebates",
    data: data,
  });
};


export const getOneDebate = async (data) => {
  return await axios({
    method: "get",
    url: serverless + "/getDebate",
    data: data,
  });
};

export const getTrends = async (data) => {
  console.log("data",data)
  return await axios({
    method: "get",
    url: serverless + "/getTrends",
    data: data,
  });
};
export const myDebates = async (data) => {
  console.log("data",data)
  return await axios({
    method: "get",
    url: serverless + "/profile",
    data: data,
  });
};

