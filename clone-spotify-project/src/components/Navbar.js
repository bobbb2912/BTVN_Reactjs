import React from 'react'
import navbarStyles from '../css/Navbar.module.css'
import {FaSearch} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const loginReducer = useSelector((state) => state.loginReducer);
  return (
    <div className={navbarStyles.navbar__background}>
      <div className={navbarStyles.search__bar}>
        <FaSearch/>
        <input type='text' placeholder='Artists, songs, or podcasts'/>
      </div>
      <div className={navbarStyles.avatar}>
        <a href='#'/>
        <CgProfile/>
        <span>{loginReducer.userInfo?.name}</span>
        {/* console.log('username',{loginReducer.userInfo?.name}); */}
      </div>
    </div>
  )
}
