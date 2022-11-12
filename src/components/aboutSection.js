import React from "react";
 import './aboutSection.css';
// import classes from './AboutSection.css';
// console.log("Classes",classes)
import avatar from './avatar.png'
const AboutSection =()=>{
    return(
      
        <div className='aboutSection' 
        //style={{display:'flex',flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}
        >
            <div>
            <h2>About Me</h2>
            <p>Why choose me</p>
            </div>
        
            <div className='highlightSection'
            style={{width:'60%',minHeight:500,backgroundColor:'red',borderRadius:'50px'}}
            >
                <div style={{width:'50%'}}>
                <img src={avatar} width='80%' height='500' alt='pic' style={{borderRadius:10}} />
                </div>
                <div style={{width:'50%',minHeight:500}} >
                   <p className='mainContent'>Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.
                    </p>
                    <div style={{textAlign:'left'}}>
                    <h1>Few Highlights</h1>
                    <ol>
                        <li>Full Stack web and mobile development</li>
                        <li>Full Stack web and mobile development</li>
                        <li>Full Stack web and mobile development</li>
                        <li>Full Stack web and mobile development</li>
                    </ol>
                    <button>Resume</button>
<button>Contact Me</button>
                    </div>
                    </div>


                </div>

            </div>

     
    
    )
}

export default AboutSection