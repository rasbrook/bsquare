import { useEffect, useRef } from "react"
import Foot from "./footer"
import Upper from "./upperhead"
import {motion} from 'framer-motion'
import gsap from "gsap"
import start from './assets/start.png'
import legacy from './assets/legacy.png'
import brea from './assets/break.png'
import d from './assets/d.png'
import tm from './assets/teamm.png'
import leg from './assets/lega.png'



function About(){
    const reff=useRef()
    const aboutref=useRef()
    const colors=[ "#ff7373" ,"#f1ff73" ,"#f494ff" ,"#e186ff" ,  "#1a2b8b","#32ff36" ,"#ffc43c", "#a73cff", "#378566"]
    const opa=[0.5,0.6,0.7,0.8,0.8,1]
    const randcolor=colors[Math.floor(Math.random() * colors.length)]
    const randopa=opa[Math.floor(Math.random() * colors.length)]
            
    useEffect(()=>{
        const r=reff.current
        
        


        const text=r.textContent
        const sep=text.split('')
        var inner=''
        
        sep.forEach(e => {
            inner+=`<span>${e}</span>`

            
        });

        r.innerHTML=inner
        
        



        r.addEventListener('mouseenter' , (e)=>{
            const colors=[ "#ff7373" ,"#f1ff73" ,"#f494ff" ,"#e186ff" ,  "#1a2b8b","#32ff36" ,"#ffc43c", "#a73cff", "#378566"]
            const opa=[0.5,0.6,0.7,0.8,0.8,1]
            const randcolor=colors[Math.floor(Math.random() * colors.length)]
            const randopa=opa[Math.floor(Math.random()  * opa.length)]
        
            gsap.to('span', {
                color:randcolor,
                opacity:randopa,
                stagger:0.2,
                duration:0.2

            })

            
            
        })
        r.addEventListener('mouseleave', ()=>{
            gsap.to('#a', {
                color:'#53b7ff',
                opacity:1,
                stagger:0.2,
                duration:0.2,
            })



        

        })

        const ar=aboutref.current
        const atext=ar.textContent
        const asep=atext.split('')
        var ainner=''



        asep.forEach(e => {
            ainner+=`<span id='a'>${e}</span>`

            
        });

        ar.innerHTML=ainner
        
        



        ar.addEventListener('mouseenter' , (e)=>{
            const colors=[ "#ff7373" ,"#f1ff73" ,"#f494ff" ,"#e186ff" ,  "#1a2b8b","#32ff36" ,"#ffc43c", "#a73cff", "#378566"]
            const opa=[0.5,0.6,0.7,0.8,0.8,1]
            const randcolor=colors[Math.floor(Math.random() * colors.length)]
            const randopa=opa[Math.floor(Math.random()  * opa.length)]
            
            gsap.to('#a', {
                color:randcolor,
                opacity:randopa,
                stagger:0.2,
                duration:0.2

            })

            
            
        })
        ar.addEventListener('mouseleave', ()=>{
            gsap.to('#a', {
                color:'#53b7ff',
                opacity:1,
                stagger:0.2,
                duration:0.2

            })



        

        })

    })

   
    




    return(<div>
        <Upper />
        <motion.h1 ref={aboutref} style={{placeContent:"center", textAlign:"center", fontSize:"8vw", color:'#53b7ff'}}> About Us</motion.h1>
        <p className="welcome" style={{placeContent:"center", textAlign:"justify" , width:'95%', marginLeft:'2.5%'}}>Welcome to B Squre Software Solutions! As
             a forward-thinking software development company founded by Biruk Beshaneh, we’re passionate about creating transformative solutions for 
             businesses across industries. Our mission is to empower our clients by leveraging cutting-edge technology. What sets us apart? Our team of seasoned developers,
              led by Biruk, combines technical prowess with a customer-centric mindset. We don’t just write code; we craft solutions that drive real-world impact.</p>
     
        <motion.h1 ref={reff} id='our' style={{placeContent:"center", textAlign:"center", fontSize:"6vw", color:'#53b7ff', width:'90%'}} >Our story</motion.h1>

        <div className="about-our">
            <div>
            <motion.h3 style={{placeContent:"center", textAlign:"center", fontSize:"4vw", color:'#53b7ff'}} whileHover={{color:randcolor}}>Our Humble Beginnings</motion.h3>
        <motion.p style={{placeContent:"center", textAlign:"justify"}}>In the heart of Addis Ababa, Biruk Beshaneh sat hunched over his laptop, surrounded by flickering
             fluorescent lights. It was a chilly night, and the room echoed with the hum of the aging air conditioner.
              His vision was clear: to build software that would transform businesses, one line of code at a time.
            
Biruk had scraped together meager savings from odd jobs and late-night freelancing gigs. His dream was audacious:
 to create a software development company that would rival the giants. But audacity alone wouldn’t suffice; he needed
  resilience, grit, and a dash of madness</motion.p>
            </div>
             <img src={start}  />
             
        </div>
        <div className="about-our">
        <img src={legacy}  />
            <div>
            <motion.h3 style={{placeContent:"center", textAlign:"center", fontSize:"4vw", color:'#53b7ff'}} whileHover={{color:randcolor}}>
            The Code Wars</motion.h3>
        <motion.p style={{placeContent:"center", textAlign:"justify"}}>The early days were a blur of caffeine-fueled coding marathons. 
            Biruk juggled multiple projects
             simultaneously, often working through the night. His fingers danced across the keyboard, crafting
              elegant algorithms, debugging mercilessly, and battling server crashes. The coffee stains on his
               worn-out hoodie bore witness to sleepless nights and relentless determination.</motion.p>
            </div>
             
             
        </div>
        <div className="about-our">
        
            <div>
            <motion.h3 style={{placeContent:"center", textAlign:"center", fontSize:"4vw", color:'#53b7ff'}} whileHover={{color:randcolor}}>
            The First Breakthrough</motion.h3>
        <motion.p style={{placeContent:"center", textAlign:"justify" }}>
        Then came the breakthrough—a small contract from a local business. Biruk’s heart raced as he signed the dotted
         line. The project involved building an inventory management system. He worked tirelessly, fueled by adrenaline
          and the promise of validation. When the system went live, the client’s joy was palpable. Biruk’s software had
           streamlined their operations, saving time and money.</motion.p>
            </div>
            <img src={brea}  />
             
             
        </div>
        <div className="about-our">
        <img src={d}  />
            <div>
            <motion.h3 style={{placeContent:"center", textAlign:"center", fontSize:"4vw", color:'#53b7ff'}} whileHover={{color:randcolor}}>
            The Desert of Doubt</motion.h3>
        <motion.p style={{placeContent:"center", textAlign:"justify"}}>The Desert of Doubt But success was fleeting.
             The desert of doubt stretched before him. Would clients trust a fledgling company? Could he compete 
             with established players? Biruk’s inbox remained stubbornly empty. Rejections piled up like unread 
             novels. Yet, he persisted. He refined his pitch, networked relentlessly, and attended industry meetups.
              Slowly, the tide turned.</motion.p>
            </div>
             
             
        </div>
        <div className="about-our">
        
            <div>
            <motion.h3 style={{placeContent:"center", textAlign:"center", fontSize:"4vw", color:'#53b7ff'}} whileHover={{color:randcolor}}>
            The Team Takes Shape</motion.h3>
        <motion.p style={{placeContent:"center", textAlign:"justify"}}>
            Biruk knew he couldn’t do it alone. He scoured LinkedIn, seeking kindred souls. liya, the frontend wizard,
             joined first. His eye for design and obsession with responsive layouts elevated their projects. , mahelet
             the backend sorceress, followed—a database whisperer who could optimize queries in her sleep. Rebira, 
             the UX magician, completed the trio, turning wireframes into delightful experiences.</motion.p>
            </div>
            <img src={tm}  />
             
             
        </div>
        <div className="about-our">
        <img src={leg}  />
            <div>
            <motion.h3 style={{placeContent:"center", textAlign:"center", fontSize:"4vw", color:'#53b7ff'}} whileHover={{color:randcolor}}>
            B Square Legacy</motion.h3>
        <motion.p style={{placeContent:"center", textAlign:"justify"}}>
Today, as we stand atop the summit, we honor Biruk Beshaneh—the visionary who dared to dream. His struggles forged
 our resilience, his late-night coding sessions lit our path, and his unwavering belief fueled our ascent. We continue
  to code the future, one elegant solution at a time.
Feel free to explore our website and learn more about our team, our projects, and our commitment to excellence.</motion.p>
            </div>
             
             
        </div>


        
    

        <Foot />
    </div>)
}



export default About