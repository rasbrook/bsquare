import gsap from "gsap"
import {motion} from 'framer-motion'
import Links from "./links"


function Foot(){
    
    return(<motion.div className="foot" style={{backgroundColor:'#888', marginTop:70, width:"99%"}}>
        
        <motion.div style={{maxWidth:400, width:'33%'}}>
                    <motion.h1 style={{minWidth:370}}>
                        B Square Software solution
                    </motion.h1>
                    <motion.p style={{minWidth:370, textAlign:"justify"}}>
                    At B Square, we’re passionate about creating innovative software solutions that empower
                     businesses and individuals. As a leading software development company, we specialize in
                      designing, developing, and maintaining custom applications, frameworks, and tools. Our
                       skilled team collaborates closely with clients to understand unique requirements, 
                       ensuring seamless user experiences. Choose B Square for tailored software solutions that
                        meet your specific needs. Let’s build something great together!



                    </motion.p>
                   

        </motion.div>
        <div style={{maxWidth:375, width:'100%'}}>
        <Links />
 

        <div id="cont">
        <motion.h1>
        Contact Detail
        </motion.h1>
        <motion.h4 >
        Phone No: <motion.a href= 'tel:+251952495454' whileHover={{color:'#53b7ff',cursor:"pointer"}}>0952495454</motion.a>
        </motion.h4>
        <motion.h4>
        Email: <motion.a whileHover={{color:'#53b7ff',cursor:"pointer"}}>bsquare@solution.com</motion.a>
       
        </motion.h4>
        <motion.h4>
        Location: <motion.a 
        href="https://www.google.com.et/maps/place/No1+Fitness+and+Spa/@9.0064581,38.8659268,19.57z/data=!4m6!3m5!1s0x164b85bf6c771247:0xebcee2f0668780ea!8m2!3d9.0064667!4d38.8665151!16s%2Fg%2F11vw_cb8js?entry=ttu"
        whileHover={{color:'#53b7ff', cursor:"pointer"}}>Addis abeba, semit 72</motion.a>
        </motion.h4>
        </div>

        
        </div>

        

        
        


        

    </motion.div>)
}



export default Foot