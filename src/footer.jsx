import gsap from "gsap"
import {motion} from 'framer-motion'
import Links from "./links"


function Foot(){
    
    return(<motion.div className="foot" style={{backgroundColor:'#888', marginTop:70}}>
        
        <motion.div style={{maxWidth:400, width:'33%'}}>
                    <motion.h1 style={{minWidth:300}}>
                        B Square Software solution
                    </motion.h1>
                    <motion.p style={{minWidth:300, textAlign:"justify"}}>
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
 

        <div id="cont" style={{position:'relative'}}>
        <motion.h1>
        Contact Detail
        </motion.h1>
        <motion.h4 >
        Phone No: <motion.a 
        target="_blank"
        href= 'tel:+251952495454' whileHover={{color:'#53b7ff',cursor:"pointer"}}>0952495454</motion.a>
        </motion.h4>
        <motion.h4>
        Email: <motion.a  target="_blank"
        whileHover={{color:'#53b7ff',cursor:"pointer"}}>bsquare@solution.com</motion.a>
       
        </motion.h4>
        <motion.h4>
        Location: <motion.a  
        target="_blank"
        href="https://www.google.com/maps/place//@8.9483596,38.7308214,21z/data=!4m8!1m7!3m6!1s0x164b8168f74c9bc5:0x549ecc5f79f347f1!2zTGVidSBNZWJyYXQgSGFpbGUgfCDhiIjhiaEg4YiY4Yml4Yir4Ym1IOGIg-GLreGIjQ!8m2!3d8.9484418!4d38.7351074!16s%2Fg%2F11l65_c01v?entry=ttu"
        whileHover={{color:'#53b7ff', cursor:"pointer"}}>Addis abeba, Lebu mebrat hail</motion.a>
        </motion.h4>
        </div>

        
        </div>

        
        
        
        
        <div style={{backgroundColor:'#4b4b4b', width:'102%', position:'relative',minWidth:'2000px',
             top:'400px', height:'40px', left:-775, justifyContent:'center', overflow:'hidden'}}>
            <p style={{fontSize:12, textAlign:'center'}}>
            © 2024 B SQUARE All Rights Reserved
            </p>

        </div>
        
        


        

    </motion.div>)
}



export default Foot