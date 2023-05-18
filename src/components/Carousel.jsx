import React, { useState } from 'react'
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { Box, IconButton } from '@mui/material'
import {ImgData} from "../data"




function Carousel(props) {

    function handleClick(image)
    {
      
        props.setImage(image.id);
        props.setDesc(image.id)
      
    }
  
    const value = ImgData.map(image=>{
      return <Box className='caroBox' component="img"   src={image.img} onClick={()=>handleClick(image)}/>
    })


  return (
    <div>
           
              <Box
                sx={{
                  height: 100,
                  width: 750,
                  gap:"10px",
                  display:"flex"
                  
                }}
              >
                 <IconButton  sx={{padding:"0px"}} onClick={()=>{(props.image > 0 && props.setImage(props.image-1));props.desc >0 && props.setDesc(props.desc-1)}}>
                  <ArrowLeftRoundedIcon  color="primary" sx={{ fontSize: 38}}  />
                </IconButton>
                {value}
                {/* <Box className='caroBox' component="img"   src={ImgData[0].img} onClick={()=>handleClick}/>
                <Box className='caroBox' component="img"  src={ImgData[1].img}  onClick={()=>handleClick}/>
                <Box className='caroBox' component="img"  src={ImgData[2].img} onClick={()=>handleClick}/>
                <Box className='caroBox' component="img"  src={ImgData[3].img}  onClick={()=>handleClick}/>
                <Box className='caroBox' component="img"  src={ImgData[4].img}  onClick={()=>handleClick}/> */}
                <IconButton  sx={{padding:"0px"}} onClick={()=>{props.image < ImgData.length-1 && props.setImage(props.image+1);props.desc < ImgData.length-1 && props.setDesc(props.desc+1)}}>
                  <ArrowRightRoundedIcon  color="primary"  sx={{ fontSize: 38}}/>
                </IconButton>
              </Box>
                          
            </div>
  )
}

export default Carousel