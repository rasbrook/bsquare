import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useRef } from "react"
import gsap from "gsap"
import {color, motion } from 'framer-motion'

function Links(){
    
    const a_hover={scale:1,cursor:'pointer', opacity:1, fontSize:'1.5em', color:"inherit"}
    const w={scale:1.2,cursor:'pointer', color:"#53b7ff"}
    const r=useRef()


    
    

    return(<div ref={r}>
        <ol  className="links" style={{opacity:1}}>
            <motion.h2 
            whileHover={w}
            transition={{duration:1}}
            style={a_hover}><Link to={'/'}   className="link" >Home</Link></motion.h2>
            <motion.h2
            whileHover={w}
            transition={{duration:1}} 
            style={a_hover}><Link to={'/service'}   className="link">Service</Link></motion.h2>
            <motion.h2
             whileHover={w}
             transition={{duration:1}} 
            style={a_hover}><Link to={'/project'}  className="link">Projects</Link></motion.h2>
            <motion.h2
             whileHover={w}
             transition={{duration:1}} 
            style={a_hover}><Link to={'/About'}  className="link">About</Link></motion.h2>
            <motion.h2
             whileHover={w}
             transition={{duration:1}}  
            style={a_hover}><Link to={'/contact'} className="link">Contact</Link></motion.h2>
            
        </ol>
    </div>)
}


export default Links