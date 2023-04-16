import React, {useEffect} from 'react'
import spotifyStyle from  '../css/Spotify.module.css'
import { Container, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Spotify() {
  const loginReducer = useSelector((state) => state.loginReducer);

  useEffect(() => {
    const getUserInfo = async () => {
      const {data} = await axios.get('https://api.spotify.com/v1/me',
      {
        headers : {
            Authorization: "Bearer " + loginReducer.token,
            "Content-Type": "application/json",
        },
    });
      console.log('data', {data});
    };
    getUserInfo();

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

