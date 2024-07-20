import Upper from "../upperhead"
import Foot from "../footer"
import Sbox from "./servicebox"
import custom from '../assets/Custom.png'
import int from '../assets/Integration.png'
import cloud from '../assets/cloud-services.png'
import Security from '../assets/Security.png'
import auto from '../assets/auto.png'
import mobile from '../assets/mobile.png'
import legacy from '../assets/legacy.png'
import analytics from '../assets/analytics.png'
import ui from '../assets/ui1.png'
import mantain from '../assets/mantain.png'

function Service(){
    return(<div>
        <Upper />
        <div style={{alignItems:"center", justifyContent:"center", display:'flex', flexWrap:'wrap'}}>
        <Sbox 
        head='Custom Development'
        cont='create custom enterprise software solutions tailored to a client’s specific requirements.
         These solutions may include applications for managing inventory, supply chain, financials, or
          other business processes.'
        sorce={custom}/>
        <Sbox 
        head='Integration Services'
        cont='integrate existing enterprise software with other systems, ensuring seamless data flow and
         communication across different departments. Integration helps improve efficiency and reduces 
         manual data entry.'
        sorce={int}/>
        <Sbox 
        head='Cloud Solutions'
        cont='Developing cloud-based enterprise softwareallows organizations to access applications from
         anywhere, collaborate remotely, and scale resources as needed.We build, deploy, and maintain cloud
         -based solutions.'
        sorce={cloud}/>
        <Sbox 
        head='Security Enhancements'
        cont='enhance security by developing software that protects sensitive data, implements access controls
        , and complies with industry standards (such as GDPR or HIPAA).
'
        sorce={Security}/>
        <Sbox 
        head='Automation and AI'
        cont='Leveraging automation and artificial intelligence (AI), We create solutions that automate repetitive
         tasks, analyze data,and provide insights for better decision-making.'
        sorce={auto}/>
        <Sbox 
        head='Mobile Apps'
        cont='Developing mobile apps for enterprise use allows employees to access critical information on their
         smartphones or tablets. These apps can streamline processes, improve communication, and enhance productivity'
        sorce={mobile}/>
        <Sbox 
        head='Legacy System Modernization'
        cont='we help organizations update outdated legacy systems, ensuring compatibility with modern technologies
         and improving overall performance.'
        sorce={legacy}/>
        <Sbox 
        head='Analytics and Reporting'
        cont='Building robust analytics and reporting tools enables organizations to track performance metrics
        , identify trends, and make data-driven decisions.'
        sorce={analytics}/>
        <Sbox 
        head='User Experience (UX) Design'
        cont='Focusing on user-friendly interfaces ensures that enterprise software is intuitive and efficient
         for end-users. UX design plays a crucial role in adoption and productivity.'
        sorce={ui}/>
        <Sbox 
        head='Maintenance and Support'
        cont='Ongoing maintenance, bug fixes, and technical support are essential for keeping enterprise software
         running smoothly. We can provide these services.'
        sorce={mantain}/>
        </div>
        

        <Foot />
    </div>)
}


export default Service