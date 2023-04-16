import React from 'react'
import sidebarStyles from '../css/Sidebar.module.css'
import { Container } from 'react-bootstrap'
import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled, MdSearch} from 'react-icons/md'
import Playlist from './Playlist'
export default function Sidebar() {
  return (
    <Container className={sidebarStyles.sidebar__background}>
      <div className={sidebarStyles.top__links}>
        <div className={sidebarStyles.logo}>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png' 
        alt='spotify logo' />
        </div>
        <ul>
          <li>
            <MdHomeFilled/>
            <span>Home</span>
          </li>
          <li>
            <MdSearch/>
            <span>Search</span>
          </li>
          <li>
            <IoLibrary/>
            <span>Your Library</span>
          </li>
        </ul>
      </div>  
      <Playlist/>
    </Container>
  )
}
