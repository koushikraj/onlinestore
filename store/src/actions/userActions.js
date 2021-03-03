import Axios from "axios";
import Cookie from 'js-cookie';

const USER_SIGNIN_REQUEST = 'USER_SIGNIN_REQUEST';
const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
const USER_SIGNIN_FAIL = 'USER_SIGNIN_FAIL';
const USER_LOGOUT = 'USER_LOGOUT';

const signin = (email, password) => {
  //dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
 if(email=="abc@gmail.com" && password=="qwerty") {
    //const { data } = await Axios.post("/api/users/signin", { email, password });
    Cookie.set('userInfo', JSON.stringify({email,password}));
    return({ type: USER_SIGNIN_SUCCESS, payload: {email,password}});
  }
  else if(email !== "abc@gmail.com" || password !== "qwerty" || email==="" || password===""){
   // alert("Please enter Valid credentials");
    return({ type: USER_SIGNIN_FAIL,payload:"Please enter Valid credentials" })
  } 
  else  {
   return ({ type: USER_SIGNIN_FAIL, payload: "Wrong password" });
  }
}

const logout =  () => {
  Cookie.remove("userInfo");
  return({ type: USER_LOGOUT })
}
export { signin, logout };