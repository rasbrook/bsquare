import { useEffect, useRef, useState } from "react"
import Mode from "./mode"
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import gsap from "gsap"
import Links from "./links"


function Head(){
    const refer=useRef()
    

    useEffect(()=>{
        
        gsap.from('.head' ,{
            opacity:0,
            x:30,
            y:-30,
            duration:3
        })
    },[])


    return (<nav ref={refer} className="head">
       <div style={{display:'flex', alignItems:'center'}}>
       
        
        <motion.h1 initial={{x:-30,
            opacity:0
        }} animate={{x:30, 
            opacity:1, 
            marginRight:30
        }} translate={{duration:1}} style={{left:10}}>B Square</motion.h1>
        <svg width="50px" height="50px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" 
       style={{fill:'none', stroke:'#53b7ff', strokeLinecap:'round', strokeLinejoin:'round'}}><defs>
</defs>
<path className="a" d="M32.0621,12.9761v-1.75A5.6448,5.6448,0,0,0,26.42,5.5842H11.1423A5.6448,5.6448
,0,0,0,5.5,11.2264V26.47a5.6455,5.6455,0,0,0,5.6423,5.6422H26.42A5.6454,5.6454,0,0,0,32.0621,26.47v-7.743"/>
<path class="a" d="M15.9389,35.0228v1.7508a5.6448,5.6448,0,0,0,5.6423,5.6422H36.8577A5.6455,5.6455,0,0,0,
42.5,36.7736V21.53a5.6448,5.6448,0,0,0-5.6423-5.6422H21.5812A5.6441,5.6441,0,0,0,15.9389,21.53v7.742"/></svg>
       </div>
        <Links />
        
        
            
       
        <Mode />
       
      </nav>)
}





export default Head