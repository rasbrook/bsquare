

function Prolink(props){
    return(<div style={{backgroundColor:'#00fbffa3', width:'100vw'}}>
        <h1 style={{textAlign:'center'}}>{props.title}</h1>
        <div style={{display:'flex',  maxWidth:350, alignItems:'center', margin:20}}>
        
        <div >
        
        <div style={{display:'flex',flexWrap:'wrap', alignItems:'center', width:'50vw', margin:10}}>
        <h2>Client:-</h2>
        <p style={{textAlign:'justify'}}>{props.client}</p>
        </div>
        <div style={{display:'flex',flexWrap:'wrap', alignItems:'center', width:'50vw', margin:10}}>
        <h2>Objective</h2>
        <p style={{textAlign:'justify'}}>{props.objective}</p>
        </div>
        <div style={{display:'flex',flexWrap:'wrap', alignItems:'center', width:'50vw', margin:10}}>
        <h2>Our Solution</h2>
        <p style={{textAlign:'justify'}}>{props.solution}<a
        target="_blank"  
        href={props.view}
        >    View website</a></p>
        </div>
        </div>
        <a href={props.link} target="_blank"><img loading='lazy' style={{width:'40vw', maxHeight:600}} src={props.sorce} /></a>
    </div>
    </div>)
}



export default Prolink