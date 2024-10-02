import Prolink from "./projectlink"
import Upper from "./upperhead"
import Foot from "./footer"
import Jemo from './assets/jemologo.png'
import venarch from './assets/venarch.png'

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
               accessible, and choose a professional domain name.  ' 
            view='https://venarch.netlify.app/'
            sorce={venarch}  link='https://venarch.netlify.app/'/>
            <Prolink title='Gym and Spa Portfolio Websites'  
            client='Jemo Gym and Spa'
            objective='Creating a gym and spa portfolio website can attract new clients, build brand awareness, provide
             essential information, enhance customer experience with online booking and virtual tours, showcase success 
             stories, promote special offers, engage with clients through blogs, and improve search engine visibility.'

            solution='To create an effective gym and spa portfolio website, We start by analyzing the specific requirements
             and objectives of the business. we then design an intuitive and visually appealing layout, ensuring easy
              navigation and clear calls to action. The right technology stack is selected based on the project’s needs, 
              such as HTML, CSS, JavaScript, React, or WordPress. then implement the design using best coding practices, 
              focusing on both front-end and back-end development for functionalities like booking systems and user accounts.
               Engaging content, including text, images, and videos, is created to showcase the services and facilities. 
               The website is optimized for search engines to improve visibility and attract organic traffic. Thorough testing 
               is conducted to ensure the site works seamlessly across different devices and browsers. Finally, the website is
                launched, and ongoing maintenance and updates are provided to keep it running smoothly and securely.' 
            sorce={Jemo}
            view='https://jemogym.netlify.app/'  
            link='https://jemogym.netlify.app/'/>
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

