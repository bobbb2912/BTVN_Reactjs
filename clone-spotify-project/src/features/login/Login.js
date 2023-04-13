import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Login.module.css';
import { Container, Button } from 'react-bootstrap';

const handleClick = () => {
  const clientId = '1e1bccb9ab9948c0bce3dde78c73c10d';
  const redirectUri = 'http://localhost:3000/';
  const apiUrl = 'https://accounts.spotify.com/authorize';
  const scope = [
    'user-read-email', 
    'user-read-private',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing'];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
}
export function Login() {
  // const count = useSelector();
  const dispatch = useDispatch();

  return (
    <Container>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' 
        alt='spotify logo' />
        <Button onClick={handleClick}>Connect Spotify</Button>
    </Container>
  );
}

