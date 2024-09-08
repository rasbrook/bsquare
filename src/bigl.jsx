import {motion} from 'framer-motion'



function Bigl(props){
    

    return(<motion.div 
    className='bigl'
    style={{backgroundColor:'#959595'}}
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    whileHover={{backgroundColor:'#53b7ff', scale:1.05}} >
        <motion.div
        initial={{x:-200}}
        whileInView={{x:0}}
        transition={{duration:1}}>
            <motion.h1>{props.head}</motion.h1>
            <motion.p>{props.cont}</motion.p>
        </motion.div>
        <motion.img
        loading='lazy' 
        initial={{x:200}}
        whileInView={{x:0}}
        transition={{duration:1}}
        
        
        src={props.sorce}>
            
        </motion.img>




        
    </motion.div>)
}



export default Bigl