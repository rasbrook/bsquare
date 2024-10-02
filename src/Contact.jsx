import Upper from "./upperhead"
import Foot from "./footer"
import { useState } from "react"
import {motion} from 'framer-motion'
import Spline from '@splinetool/react-spline';



function Contact(){
    const [submit, setSubmit]=useState('')
   
    return(<div style={{justifyContent:'center'}}>
        <Upper />
        <form style={{justifyContent:'space-between', 
            width:'90%', marginLeft:'5%', 
            backgroundColor:'#8787872e',marginTop:'10vw'}}>
            <div className="form">
            <label style={{margin:20}} >Your Name</label>
            <input style={{margin:20,height:30, width:200, borderRadius:5,
                 border:'none', backgroundColor:'#00fbff6d', color:'inherit', overflowX:'hidden'}} type="text" 
                 placeholder="Name" /><br />

            <label style={{margin:20}} >Email Address</label>
            <input style={{margin:20, height:30, width:200, borderRadius:5,
                 border:'none',backgroundColor:'#00fbff6d', color:'inherit', overflowX:'hidden'}} type="email" 
                 placeholder="Email Address"/>
                 <br />


            <label style={{margin:20}} >Phone Number</label>
            <input style={{margin:20, height:30, width:200, borderRadius:5, 
                border:'none',backgroundColor:'#00fbff6d', color:'inherit', overflowX:'hidden'}} type="tel" 
                placeholder="Phone Number" />


            </div>
            <label style={{margin:20}}>Message</label>
            <textarea style={{margin:20, width:'90%', color:"inherit" ,backgroundColor:'#00fbff6d', overflowX:'hidden'}} type='text'  placeholder="message" rows={10} cols={100}></textarea>
        </form>
        <h1 style={{color:'#53b7ff', fontSize:'12px', fontWeight:200,marginLeft:'43.5%'}}>{submit}</h1>

        <motion.button 
        style={{width:150, height:50, border:'none', marginLeft:'45%', 
        backgroundColor:'#53b7ff', color:'inherit' ,
         borderRadius:'10px'}} 
         whileHover={{scale:1.1}}
         whileTap={{scale:0.9}}
         onClick={()=>{setSubmit('the message have been submitted')}}>Send message</motion.button>
         
        <div id='globe'>
        <h1 style={{marginLeft:'35%', marginBottom:'-10%', marginTop:'20%', color:'#53b7ff', fontSize:'2vw'}}>Click The Globe for Location</h1>
        <a 
        target="_blank"
        href="https://www.google.com/maps/place//@8.9483596,38.7308214,21z/data=!4m8!1m7!3m6!1s0x164b8168f74c9bc5:0x549ecc5f79f347f1!2zTGVidSBNZWJyYXQgSGFpbGUgfCDhiIjhiaEg4YiY4Yml4Yir4Ym1IOGIg-GLreGIjQ!8m2!3d8.9484418!4d38.7351074!16s%2Fg%2F11l65_c01v?entry=ttu">
        <Spline scene="https://prod.spline.design/12ZFJrTlhbbWx3tz/scene.splinecode" />
        </a>
        </div>


         


        <Foot />
    </div>)
}


export default Contact