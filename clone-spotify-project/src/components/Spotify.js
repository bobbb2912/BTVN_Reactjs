import React, {useEffect} from 'react'
import spotifyStyle from  '../css/Spotify.module.css'
import { Container, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getUserInfo } from '../features/login/loginSlice';



export default function Spotify() {
  const loginReducer = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = async () => {
      const {data} = await axios.get('https://api.spotify.com/v1/me',
      {
        headers : {
            Authorization: "Bearer " + loginReducer.token,
            "Content-Type": "application/json",
        },
    });
      console.log('user info', {data});
      const info = {
        userid: data.id,
        userName: data.display_name, 
      };
      // console.log('userinfo', userInfo);
        dispatch(getUserInfo(info));
    };
    userInfo();
  }, [loginReducer.token]);
  return (
    <Container className={spotifyStyle.spotify}>
      <div className={spotifyStyle.spotify__body }>
        <Sidebar/>
        <div className={spotifyStyle.body }>
          <Navbar/>
          <div className='body__contents'>
              <Body/>
          </div>
        </div>
      </div>
      <div className='spotify__footer'>
        <Footer/>
      </div>

    </Container>
  )
}

