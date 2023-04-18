import React from 'react'
import navbarStyles from '../css/Navbar.module.css'
import {FaSearch} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import { useSelector } from 'react-redux'
import {Container } from 'react-bootstrap'

export default function Navbar({navBackground}) {
  const loginReducer = useSelector((state) => state.loginReducer);
  console.log('userinfo_navbar ', loginReducer.userInfo?.userName);
  return (
    <Container className={navBackground ? navbarStyles.navbar__background_1 : navbarStyles.navbar__background_2} >
      <div className={navbarStyles.search__bar}>
        <FaSearch/>
        <input type='text' placeholder='Artists, songs, or podcasts'/>
      </div>
      <div className={navbarStyles.avatar}>
        <a href='#'>
          <CgProfile/>
          <span>{loginReducer.userInfo?.userName}</span>
          {/* console.log('username',{loginReducer.userInfo?.name}); */}
        </a>
      </div>
    </Container>
  )
}
