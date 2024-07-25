import Prolink from "./projectlink"
import Upper from "../upperhead"
import Foot from "../footer"
import venarch from '../assets/venarch.png'

function Project(){
    return(<div>
        <Upper />

        <h1 style={{fontSize:"4em"}}>
            Trusted By
        </h1>
        <div>
            <Prolink title='Architectural Portfolio Websites'  
            client='Venarch Consulting Architests and Engineers'
            objective='Develop a comprehensive portfolio website these showcases venarch architectural accomplishments,
            design philosophies, and qualifications. Potential clients and employers can explore samples of your past 
            projects and understand your approach.'
            solution='When creating an architecture portfolio website,we focus on quality over quantity by curating
             a limited number there your best projects. Use high-quality visuals—professional photographs, renderings,
              and plans—to showcase there work. Provide brief descriptions for each project, emphasizing there design
               process and unique features. Include an “About” section introducing them to there potential client
               , qualifications, and design philosophy. Highlight achievements, make contact information easily 
               accessible, and choose a professional domain name' 
            sorce={venarch}  link='https://venarch.netlify.app/'/>
        </div>

        <div style={{textAlign:'center', fontSize:'2.5vw', maxWidth:'90vw', marginTop:'5em'}}>
            <h1>Scope of Work</h1>
            <h2>Our services cover the entire software development lifecycle</h2>
            <h3>Requirements Gathering</h3>
            <p>We dive deep into understanding your needs.</p>
            <h1>|</h1>

            <h3>Design and Prototyping</h3>
            <p>Crafting intuitive interfaces and user flows.</p>
            <h1>|</h1>

            <h3>Development</h3>
            <p> Writing clean, efficient code that scales.</p>
            <h1>|</h1>

            <h3>Testing and Quality Assurance</h3>
            <p>Ensuring bug-free solutions.</p>
            <h1>|</h1>


            <h3>Deployment and Maintenance</h3>
            <p>Supporting you even after launch.</p>
        </div>

        <div style={{textAlign:'center', fontSize:'2.5vw', maxWidth:'90vw', marginTop:'5em'}}>
            <h1>Timeline</h1>
            <h2>Every project is unique, but we typically break it down like this</h2>
            <h3>Discovery and Planning</h3>
            <p>1-2 weeks</p>
            <h1>|</h1>

            <h3>Development</h3>
            <p>2–10 weeks (depending on complexity)</p>
            <h1>|</h1>

            <h3>Testing and Refinement</h3>
            <p>1 weeks</p>
            <h1>|</h1>

            <h3>Deployment</h3>
            <p>Seamless transition to production</p>
        
        </div>







        <Foot />
    </div>)

}



export default Project

