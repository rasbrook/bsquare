import { useState } from "react"
import "./mode.css"
import {motion }from 'framer-motion'

function Mode(){
    const [ltext, setltext]=useState('dark')



  function handlechange(event){
    
    let state=event.target.checked
    
    if (state){
      setltext('light')
      document.getElementById('body').style.backgroundColor='#000'
      document.getElementById('body').style.color='#fff'
    }
    else{
      setltext('dark')
      document.getElementById('body').style.backgroundColor='#fff'
      document.getElementById('body').style.color='#000'
    }
  }
  return(<motion.div  initial={{x:30}} animate={{x:0}} transition={{duration:1.5}} className="m">
    
    <p>{ltext}</p>
  <label className="mode">
    
    <input 
    value='on'
  type="checkbox"  
  onChange={handlechange}
></input><span className="slider" /></label>
  </motion.div>
  
)
}





export default Mode