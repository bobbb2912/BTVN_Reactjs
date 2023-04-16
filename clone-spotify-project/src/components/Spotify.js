import React from 'react'
import spotifyStyle from  '../css/Spotify.module.css'
import { Container, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

export default function Spotify() {
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

