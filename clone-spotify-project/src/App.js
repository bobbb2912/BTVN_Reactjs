import React, {useEffect} from 'react';
import './App.css';
import { Login } from './features/login/Login';
import { useDispatch } from 'react-redux';

function App() {
  // const [{token}, dispactch] = useStateProvider
  useEffect(() => {
    const hash = window.location.hash;
    if(hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      console.log(token);
      // dispactch();
    }
  }, []);
  return (
    <div >
     <Login/>
    </div>
  );
}

export default App;
