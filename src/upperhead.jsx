import Mode from "./mode"
import Head from "./head"
import { Link } from "react-router-dom"
import {motion, useAnimationControls} from 'framer-motion'

function Upper(){
    const a_hover={color:'#0dff00', scale:1.2}
  
  
  
  
  

  const side=useAnimationControls()
  
  function clicked(){
    side.start('final')
  }
  function back(){
    side.start('backagain')
  }
    return(<div>
        <Head  />
      <motion.svg onClick={clicked} whileHover={{scale:1.2}}
         id='bar' width="80px" height="80px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill=" #347b7b" ><path fillRule="evenodd" clipRule="evenodd" d="M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z"/></motion.svg>
      
     <motion.div
     id="sidebar" 
     variants={{
      init:{
        y:-50,
        x:-300
      }, 
      final:{
        x:200
      },
      backagain:{
        x:-300

      }
      
}}  initial='init' animate={side} transition={{duration:1.5}} className="sidebar">
  <motion.svg   
  initial={{rotate:0}}
  animate={{rotate:360}}
  transition={{duration:5, repeat:Infinity, ease:'linear'}}
  
  onClick={back}
  id='x'
 
  
  
  fill=" #347b7b" height="20px" width="20px" version="1.1"  xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 460.775 460.775" space="preserve">
<path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
</motion.svg>
  


     <motion.h1 initial={{y:30}} animate={{y:0}} transition={{duration:0.5}} whileHover={a_hover}><Link style={{textDecoration:"none", color:'inherit'}} to={'/'}>Home</Link></motion.h1>
     <motion.h1 initial={{y:30}} animate={{y:0}} transition={{duration:0.5}} whileHover={a_hover}><Link style={{textDecoration:"none", color:'inherit'}} to={'/about'}>About</Link></motion.h1>
     <motion.h1 initial={{y:30}} animate={{y:0}} transition={{duration:0.5}} whileHover={a_hover}><Link style={{textDecoration:"none", color:'inherit'}} to={'/service'}>Service</Link></motion.h1>
     <motion.h1 initial={{y:30}} animate={{y:0}} transition={{duration:0.5}} whileHover={a_hover}><Link style={{textDecoration:"none", color:'inherit'}} to={'/contact'}>Contact</Link></motion.h1>


     </motion.div>
    </div>)
}



export default Upper