import React from 'react';

import {useHistory} from "react-router-dom";

import Button from '@mui/material/Button';
import SliderComponent from './SliderComponent';
function Home() {
    const history = useHistory();
    return (
        <>
        <div>
          <div className='App'>
        <h1 style={{ padding: "20px", textAlign: "center",color: 'black', textShadow: ' 2px 2px #414345'  }}><b>Welcome to Online Book Directory </b></h1>
        <pre><center><marquee behavior="scroll" direction="right"><b><i>“ Once You Stop Learning, You start Dying”</i></b></marquee></center></pre>
        <Button variant="contained"  onClick={(e)=>{history.push('/sign-in');}}>Login</Button>&nbsp; &nbsp;
        <Button variant="contained"  onClick={(e)=>{history.push('/sign-up');}}>SignUP</Button>&nbsp;
        </div>
      </div><br/>
      <SliderComponent />

       </>
    );
}
export default Home;