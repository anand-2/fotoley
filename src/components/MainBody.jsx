import React from 'react'
import "./MainBody.css"
import {IconButton } from '@mui/material'
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import MainImg from './MainImg';
import Carousel from './Carousel';
import Desc from "./Desc";
import { useState,useEffect } from 'react'

let timer_id = undefined;


function MainBody() {


  const [Image,setImage] = useState(0)
  const [desc,setDesc] = useState(0)

  
  
    // const toggleAutoClick = () => {
    //   timer_id = setInterval(()=>{
    //     setImage((Image+1)%5)
    //   }, 1000); // Click every 3 seconds
    // };

  return (
    <div className='App'>
        <div className="AppBg">
          <MainImg image={Image} setImage = {setImage}/>
          <Desc desc = {desc}/>
          <Carousel  image={Image} setImage = {setImage} setDesc={setDesc} desc ={desc}/>
          <div style={{textAlign:"center",margin:"0rem 5rem 5rem 5rem"}}><IconButton>
                  <PlayCircleFilledRoundedIcon sx={{ fontSize: 70}} color="primary" />
                </IconButton>
          </div>

        </div>
     </div>
  )
}

export default MainBody