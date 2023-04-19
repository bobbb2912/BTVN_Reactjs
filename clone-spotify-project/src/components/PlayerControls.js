import React from 'react'
import playerControlsStyles from '../css/PlayerControls.module.css'
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsShuffle} from 'react-icons/bs'
import {CgPlayTrackNext, CgPlayTrackPrev} from 'react-icons/cg'
import {FiRepeat} from 'react-icons/fi'
import { useSelector } from 'react-redux'

export default function PlayerControls() {
    const loginReducer = useSelector((state) => state.loginReducer);
  return (
    <div className={playerControlsStyles.playerControls}>
       <div className={playerControlsStyles.shuffle}>
            <BsShuffle/>
        </div> 
        <div className={playerControlsStyles.previous}>
            <CgPlayTrackPrev/>
        </div>
        <div className={playerControlsStyles.state}>
            {loginReducer.playerState ? <BsFillPauseCircleFill/> : <BsFillPlayCircleFill/>}
        </div>
        <div className={playerControlsStyles.next}>
            <CgPlayTrackNext/>
        </div>
        <div className={playerControlsStyles.repeat}>
            <FiRepeat/>
        </div>
    </div>
  )
}
