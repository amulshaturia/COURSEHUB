import { useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios' ; 

import { AppBar, Toolbar, styled, Box } from "@mui/material";

import { AccountContext } from "../context/AccountProvider";

// components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";
import Navbar from '../../Navbar.js'; 

const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;
const Header = styled(AppBar)`
  height: 125px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
  height: 222px;
  background-color: #00a884;
  box-shadow: none;
`;



const Messenger = () => {
  // const { account } = useContext(AccountContext);

  const [user, setUser] = useState({});
  const navigate = useNavigate(); 
  
  const getUserInfo = async () => {
    let res = await axios.post('http://localhost:8000/user/profile', {}, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('JWT-token') || ""}`
      }
    });
    if (res['data'].tokenVerified === false) {
      return navigate('/Login');
    }
    setUser(res['data'][0]);
  }
  
  useEffect(() => {
    getUserInfo();
  }, []);


  return (
    <Component>
      {/* {account ? ( */}
      <>
        <Navbar/>
        {/* <Header> */}
          {/* <Toolbar></Toolbar> */}
        {/* </Header> */}
        {/* <ChatDialog /> */}
        
        
        <ul id='list' style={{ listStyle: 'none' }}>
          {
            user.enrolledCourses.map((data) => {
              return (
                <li>
                  <div class="product-card my-5" style={{width : '100%' , display : 'flex' , fontSize : '20px'}}>
                      {data}
                  </div>
                </li>
              )
            })
          }
        </ul>

      </>
      {/* ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog/>
        </> */}
      {/* )} */}
    </Component>
  );
};

export default Messenger;
