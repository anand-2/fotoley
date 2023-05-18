import React from 'react'
import {ImgData} from "../data"
import { Box } from '@mui/material'



function MainImg(props) {
  return (
    <Box
    component="img"
    className='mainImg'
    sx={{
      height: 500,
      width: 770,
      objectFit:"fill",
    }}
    alt="The house from the offer."
    src={ImgData[props.image].img}
    margin="2rem"
  />
  )
}

export default MainImg