import {backOut, motion} from 'framer-motion'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'




function Title(){
  const refer=useRef()
  
  useEffect(()=>{
    const reff=refer.current
    const r=reff.textContent
    const split=r.split('')
    var inner=''
    split.forEach(element => {
      inner=inner + `<span className='a'>${element}</span>`

      
    });
    
    reff.innerHTML=inner

    const colors=[ "#ff7373" ,"#f1ff73" ,"#f494ff" ,"#e186ff" ,  "#1a2b8b","#32ff36" ,"#ffc43c", "#a73cff", "#378566"]
    const opa=[0.5,0.6,0.7,0.8,0.8,1]

   
    
    
    reff.addEventListener('mouseenter', ()=>{
      const randomcolor=colors[Math.floor(Math.random() *colors.length) ]
      const randomopa=opa[Math.floor(Math.random() * opa.length)]
     
      gsap.to('span', {
        scale:0.8,
        opacity:randomopa,
        duration:0.5,
        stagger:0.2,
        color:randomcolor


      })

    })
    reff.addEventListener('mouseleave', (e)=>{
      
      gsap.to('span', {
        scale:1,
        y:0,
        opacity:1,
        duration:0.5,
        stagger:0.2,
        color:'#53b7ff'
        
      })

    })

  }, [])

    return(<div >
        <motion.h1 ref={refer} style={{
        placeContent:"center",
        fontSize:'10vw',
        margin:'5%', 
        color:'#53b7ff',
        opacity:0,
        y:-150
      }}
      animate={{
        opacity:1,
        y:0
        
      }}
      transition={{duration:3}} 
       className='let'>Let's Create Your Dream Together</motion.h1>
      
      
    
      <motion.div 
      initial={{
        x:0,
        opacity:0,
        width:'3rem',
        height:'3rem',
        borderRadius:'1.5rem',
        backgroundColor:'#538fff'
      }}
      animate={{
        x:200,
        opacity:1
        

      }}
      transition={{duration:1, delay:4,
        repeat:Infinity, repeatType:"mirror", ease:'easeInOut'}}
      />
      <a style={{textDecoration:'none', color:'inherit'}} href= 'tel:+251952495454'>
      <motion.div className='hide'
      initial={{
        position:'absolute',
        top:'50%',
        left:'85%',
        overflow:'hidden',
        width:60,
        height:60,
        rotate:0,
        scale:0.8,
        borderRadius:30,
        backgroundColor:'#ff7b7b',
        opacity:1,
        

        }}
        animate={{
          opacity:0.6, 
          repeat:Infinity, 
          repeatType:'mirror'}}
        
        whileHover={{
        opacity:1,
        width:150,
        borderRadius:15,
        backgroundColor:'#538fff',
        scale:1.6,
        rotate:720,
        textAlign:'center',
        cursor:'pointer',
        repeat:0
        
        
        
        
          

        }}
        transition={{delay:0.1,duration:1, ease:backOut,}}><h1>Call Now</h1></motion.div>
      </a>
      
    </div>)
}

export default Title