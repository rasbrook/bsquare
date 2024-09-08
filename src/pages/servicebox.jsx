import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import {motion} from 'framer-motion'


function Sbox(props){
    const reff=useRef()
    useEffect(()=>{
        const r=reff.current
        
        const s=r.textContent
        const m=s.split('')
        var inner=''
        m.forEach(e => {
            inner+=`<span>${e}</span>`

            
        });
        
        r.innerHTML=inner
        const colors=[ "#ff7373" ,"#f1ff73" ,"#f494ff" ,"#e186ff" ,  "#1a2b8b","#32ff36" ,"#ffc43c", "#a73cff", "#378566"]
        const opa=[0.5,0.6,0.7,0.8,0.8,1]

        r.addEventListener('mouseenter', ()=>{
            const randomcolor=colors[Math.floor(Math.random() *colors.length) ]
            const randomopa=opa[Math.floor(Math.random() * opa.length)]

            gsap.to('span' , {
                color:randomcolor,
                opacity:randomopa,
                duration:0.5,
                stagger:0.2,
            })
        

        })
        r.addEventListener('mouseleave', ()=>{
          
            
            gsap.to('span' , {
                
                opacity:1,
                duration:0.5,
                stagger:0.2,
                color:'#53b7ff'
            })
        

        })

    })






    return(
    <div style={{ width:'20%', margin:'1.5%', placeContent:'center', minWidth:'400px', borderRadius:10}}>
        <h1 ref={reff} style={{color:'#53b7ff', textAlign:'center',borderRadius:10,paddingLeft:20}}>{props.head}</h1>
        <motion.div style={{display:'flex'}} whileHover={{scale:1.2}}>
        <p style={{textAlign:'justify', width:'50%', minWidth:200,borderRadius:10,paddingLeft:20}}>{props.cont}</p>
        <img loading='lazy' style={{textAlign:'justify', maxWidth:200,borderRadius:10}} 
        src={props.sorce} />

        </motion.div>
        
        

    </div>)
}


export default Sbox