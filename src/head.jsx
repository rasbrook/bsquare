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
        
        <motion.h1 initial={{x:-30,
            opacity:0
        }} animate={{x:0, 
            opacity:1
        }} translate={{duration:1}}>B Cube</motion.h1>
        <Links />
        
        
            
       
        <Mode />
       
      </nav>)
}





export default Head