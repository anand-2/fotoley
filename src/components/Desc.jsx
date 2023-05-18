import React from 'react'
import {ImgData} from "../data"


function Desc(props) {
  return (
    <div style={{margin:"1rem 5rem 1rem 2rem",textAlign:"left",color:"grey"}}>
    <span style={{fontSize:"40px"}}>
         {ImgData[props.desc].heading}
    </span>
    <p style={{fontSize:"12px",marginTop:"2rem"}}>
       {ImgData[props.desc].description}
    </p>
 </div>
  )
}

export default Desc