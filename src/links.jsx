import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useRef } from "react"
import gsap from "gsap"

function Links(){
    
    const a_hover={scale:1,cursor:'pointer', opacity:1, fontSize:'1.5em'}
    const r=useRef()


    useEffect(()=>{
        const reff=r.current
        gsap.to('.link', {
            opacity:1,
            duration:1,
            y:0,
            stagger:1
    
        })
        reff.addEventListener('mouseenter', ()=>{
            gsap.to('.link' , {
                opacity:1,
                scale:1.1,
                color:'#53b7ff'
            })
        })
        reff.addEventListener('mouseleave', ()=>{
            gsap.to('.link' , {
                scale:1,
               
            })
        })
    })
    

    return(<div ref={r}>
        <ol  className="links" style={{opacity:1}}>
            <Link to={'/'} ref={r}  style={a_hover}className="link" >Home</Link>
            <Link to={'/service'} style={a_hover} ref={r} className="link">Service</Link>
            <Link to={'/project'} style={a_hover} ref={r} className="link">Projects</Link>
            <Link to={'/About'} style={a_hover} ref={r} className="link">About</Link>
            <Link to={'/contact'} style={a_hover} ref={r} className="link">Contact</Link>
            
        </ol>
    </div>)
}


export default Links