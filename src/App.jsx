import Upper from "./upperhead"
import Title from "./title"
import { motion} from 'framer-motion'
import Bigl from "./bigl"
import process from './assets/process.png'
import planning from './assets/planning.png'
import req from './assets/req.png'
import des from './assets/design.png'
import dev from './assets/dev.png'
import deploy from './assets/deploy.png'
import test from './assets/test.png'
import toolls from './assets/tools.png'
import { useRef, useEffect, useState } from "react"
import Tools from "./tools"
import Foot from "./footer"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";








function App() {
  const refer=useRef()


    useEffect(()=>{

    })

    const [loading, setLoading]=useState(true)
    
    useEffect(()=>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        
      }, 2500);

    },[])
  

  return (
    <div className="app">
      {
        loading ? (<div style={{placeContent:'center'}}>
          <ClimbingBoxLoader
          style={{placeContent:'center'}}
          color={'#53b7ff'}
          loading={loading}
         
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </div>
      )
      :
      <div>
        
        
        <Upper />
      <Title />
      <motion.h1 initial={{
        x:-400,
        fontSize:'4vw',
        placeContent:"center",
        textAlign:'center',
        opacity:0
      }}  animate={{
        x:0,
        fontSize:'4vw',
        placeContent:"center",
        textAlign:'center',
        opacity:1,
        scale:1      }}
      transition={{duration:5}}>Service We Provide</motion.h1>

      <motion.img 
      style={{width:"80%", x:'10%'}}
      initial={{scale:0,opacity:0}}
      whileInView={{opacity:1, scale:1}} transition={{duration:2, repeat:0}}
      src={process}></motion.img>
      <div className="big">
      <Bigl head='Planning' cont='Purpose: The planning phase sets the foundation for the entire project.
       Key activities include: Requirement Elicitation: Engaging with stakeholders to gather detailed 
       requirements. Techniques like interviews, surveys, and workshops are used. Feasibility Study:
        Assessing whether the project is technically feasible, economically viable, and operationally
         practical. Resource Allocation: Allocating resources (such as developers, testers, and infrastructure)
          based on project needs. Project Scheduling: Creating a timeline, milestones, and deliverables. 
          Output: The Project Plan outlines project scope, objectives, risks, and resource allocation. 
          The Software Requirement Specification (SRS) documents functional and non-functional requirements.' 
          sorce={planning} />


        <Bigl head='Requirements Analysis' cont='
Purpose: Understanding user needs and translating them into specific requirements. Here’s a closer look: 
Requirements Gathering: Collecting detailed requirements, including use cases, user stories, and 
domain-specific requirements. Requirements Documentation: Creating artifacts like context diagrams,
 data flow diagrams, and entity-relationship diagrams. Validation: Ensuring requirements are complete,
  consistent, and aligned with business goals. Output: A comprehensive requirements document that serves
   as a reference for development.' sorce={req} />


        <Bigl head='Design' cont='Purpose: Designing the software’s architecture and components. Here’s
         the nitty-gritty: Architectural Design: Defining the overall system structure, including high-level
          modules, layers, and interfaces. High-Level Design: Creating detailed designs for each module,
           specifying data structures, algorithms, and communication protocols. Low-Level Design: Designing
            individual components, considering factors like performance, security, and maintainability. 
            Output: Design documents, flowcharts, class diagrams, and sequence diagrams.' sorce={des} />


        <Bigl head='Development' cont='Purpose: Writing code based on design specifications. Here’s what
         happens in the trenches: Coding: Implementing functionality using programming languages (e.g.,
          Java, Python, C#). Developers follow coding standards and best practices. Unit Testing: Verifying
           individual units (functions, classes) to ensure correctness. Test-driven development (TDD) 
           is often used. Version Control: Managing code changes using tools like Git or SVN. Output:
            Source code files, compiled binaries.' sorce={dev} />


        <Bigl head='Testing' cont='Purpose: Ensuring software quality and functionality. Here’s 
        how it unfolds: Unit Testing: Testing individual components in isolation. Developers write
         test cases and execute them. Integration Testing: Verifying interactions between modules.
          Ensures seamless communication. System Testing: Validating the entire system against requirements.
           Includes functional, performance, and security testing. User Acceptance Testing (UAT): Involving 
           end-users to validate functionality. Output: Test cases, test reports, and defect logs.' sorce={test} />


        <Bigl head='Deployment' cont='Purpose: Making the software available for users. Here’s the deployment
         drill: Installation: Deploying the software on servers, cloud platforms, or user devices. Configuration:
          Setting up parameters (e.g., database connections, environment variables). User Training: Providing
           training materials and sessions. Output: Deployed software accessible to end-users.' sorce={deploy} />
       

      </div>
      

      <div style={{overflowX:'hidden', maxWidth:'100%', placeContent:'center', marginTop:'10%'}}>
        <Tools from='0' to='90%' />
        <motion.img style={{overflowX:'hidden',width:'80%', minWidth:300, zIndex:9 }}src={toolls}/>
        <Tools from='90%' to='0'/>
      </div>
     

      

      
      
      
    
      
      
    <Foot />  </div>}
    </div>
     
       
    )

}

export default App
