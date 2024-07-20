import  { motion } from 'framer-motion'


function Tools(props){
    const stylee={
        position:'absolute',
        left:'0',
        color:'#53b7ff',
        backgroundcolor:'#53b7ff00'
    }

    
    var init={position:'absolute',
        left: props.from}

    var anima={ left:props.to}
    
    const dur=10.8
    const hover={backgroundColor:'#53b7ff', color:'#959595', cursor:'pointer'}
    return(<motion.div  className='slide' style={{overflow:'hidden', maxWidth:'100%', backgroundColor:'#959595'}} >
        <motion.h1 style={stylee} initial={init} animate={anima}  transition={{duration:dur, delay:0 , repeat:Infinity, ease:'linear'}} >Python</motion.h1>
        <motion.h1 style={stylee} initial={init} animate={anima}  transition={{duration:dur, delay:1.2, repeat:Infinity, ease:'linear'}} >PHP</motion.h1>
        <motion.h1 style={stylee} initial={init} animate={anima}  transition={{duration:dur, delay:2.4, repeat:Infinity, ease:'linear'}}>Sql</motion.h1>
        <motion.h1 style={stylee} initial={init} animate={anima}  transition={{duration:dur, delay:3.6, repeat:Infinity, ease:'linear'}} >React</motion.h1>
        <motion.h1 style={stylee} initial={init} animate={anima}  transition={{duration:dur, delay:4.8, repeat:Infinity, ease:'linear'}} >Node.js</motion.h1>
        <motion.h1 style={stylee} initial={init} animate={anima}  transition={{duration:dur, delay:6, repeat:Infinity, ease:'linear'}}>Flusk</motion.h1>
        <motion.h1 style={stylee} initial={init} animate={anima}  transition={{duration:dur, delay:7.2, repeat:Infinity, ease:'linear'}} >HTML</motion.h1>
        <motion.h1 style={stylee} initial={init} animate={anima}  transition={{duration:dur, delay:8.4, repeat:Infinity, ease:'linear'}} >CSS</motion.h1>
        <motion.h1 style={stylee} initial={init} animate={anima} transition={{duration:dur, delay:9.6, repeat:Infinity, ease:'linear'}} >GSAP</motion.h1>
        
    </motion.div>)
}


export default Tools