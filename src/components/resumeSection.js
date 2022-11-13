import React, { useState } from "react";
 import './resumeSection.css';
// import classes from './resumeSection.css';
// console.log("Classes",classes)
const data=['Education','Skills','Work History','Project','Interest']
 const WorkHistory=()=>{
     return(
        <div className="workHistory" >
        <div className="historyHeading">
            <h1>Welectric</h1>
            <h6>Oct 2020- Jan2021(Intern)<br></br> Feb2021-May2021</h6>

            <h3>Software Engineer</h3>
            <ul>
                <li>Built a vehicle management system from scratch for the Internal team</li>
                <li>Platform for leasing electric vehicles with more generalization of product which can used for other leasing products with features like maintenance plan and auto schedule</li>
                <li>Implemented role-based authentication and user profile feature</li>
                <li>Developed assets dashboard for clients </li>
            </ul>
        </div>
        <div className="historyHeading">
            <h1>Deloitte USI</h1>
            <h6>Mayv2021 2020- Present</h6>

            <h3>Software Engineer</h3>
            <ul>
                <li>Developing web and mobile app for telecommunication client which allows user to login, activating and managing his account</li>
                <li>Contributing as a key member of development team responsible for developing and delivering stories/enhancements for web and mobile application on tech stack MERN and React Native</li>
                <li>Developing reusable UI components for web and mobile app</li>
                <li>Doing POC’s and analyzing the best solution for application </li>
                <li>Implemented features like biometrics login, App ratings, Deep linking</li>
            </ul>
        </div>

    </div>
     )
 }

 const Education=()=>{
     return(
        <div className="education">
        <h2>SKSVMACET(VTU),Lakshmeswar</h2>
        <p>2016-2020</p>
        <h4>Bachelors Of Engineering, Computer Science & Engineering</h4>

    </div>
     )
 }
 const Projects=()=>{
     return(
        <div className="projects">
        <div className="projectHeading">
            <h3>Music Player</h3>
            <a href="https://agprashant007-player.netlify.app/"target={'_blank'}rel="noreferrer" ><h5>Project link</h5></a>
           <p>Technology <b>: React JS </b></p>
           <p>Single Page application which plays song with mock api</p>
           <hr></hr>
           <h3>College Website</h3>
           <a href="http://agprashant7.ueuo.com/clgg/index.html" target={'_blank'} rel="noreferrer"><h5>Project link</h5></a>
           <p>Technology <b>: HTML, CSS, Javascript,BootStrap </b></p>
           <p>College website for techno-cultural event </p>
        </div>

    </div>
     )
 }
const skillsData=[{
    skillName:'HTML',
    value:100
},
{
    skillName:'CSS',
    value:100
},
{
    skillName:'JavaScript',
    value:88
},
{
    skillName:'React JS',
    value:85
},
{
    skillName:'Next JS',
    value:70
},
{
    skillName:'React Native ',
    value:70
},
{
    skillName:'StoryBook JS',
    value:70
},
{
    skillName:'TypeScript',
    value:60
},
{
    skillName:'Node JS',
    value:50
},



]
 const Skills=()=>{
    return(
        <div>
            <div className="skillsContainer" >
            {
        skillsData.map((res,i)=>{
            return(
                <div style={{width:'50%',marginLeft:10}}>
                           <h4>{res.skillName}</h4>
                            <div className="levelIndicator"  style={{width:'100%',}}>
                                 <div className="filled"   style={{width:`${res.value}%`}}>
                                    
                                 </div>
                             </div>
                            
                        
              </div>   
            )
        })
    }
    </div>
        </div>
    )
    //  return(
    //     <div className="skills">
    //     <div className="skillsContainer" >
    //         <div style={{width:'50%',marginLeft:10}}>
    //             <h4>HTML</h4>
    //             <div className="levelIndicator"  style={{width:'50%',}}>
    //                 <div className="filled"   style={{width:'70%'}}>
                        
    //                 </div>
    //             </div>
    //             <h4>CSS</h4>
    //             <div className="levelIndicator"  style={{width:'50%',}}>
    //                 <div  className="filled"  style={{width:'60%'}}>
                        
    //                 </div>
    //             </div>
    //         </div>
    //         <div style={{width:'50%',marginLeft:10}}>
    //             <h4>JavaScript</h4>
    //             <div className="levelIndicator"  style={{width:'50%',}}>
    //                 <div className="filled"   style={{width:'70%'}}>
                        
    //                 </div>
    //             </div>
    //             <h4>TypeScript</h4>
    //             <div className="levelIndicator"  style={{width:'50%',}}>
    //                 <div  className="filled"  style={{width:'60%'}}>
                        
    //                 </div>
    //             </div>
    //         </div>
    //         <div style={{width:'50%',marginLeft:10}}>
    //             <h4>React JS</h4>
    //             <div className="levelIndicator"  style={{width:'50%',}}>
    //                 <div className="filled"   style={{width:'70%'}}>
                        
    //                 </div>
    //             </div>
    //             <h4>React Native</h4>
    //             <div className="levelIndicator"  style={{width:'50%',}}>
    //                 <div  className="filled"  style={{width:'60%'}}>
                        
    //                 </div>
    //             </div>
    //         </div>
    //         <div style={{width:'50%',height:'100%'}}>
    //             <h4>Javascript</h4>
    //             <div className="levelIndicator" style={{width:'50%'}}>
    //                 <div  className="filled"  style={{width:'80%',}}>
                        
    //                 </div>
    //             </div>
    //             <h4>Next JS</h4>
    //             <div className="levelIndicator" style={{width:'50%',}}>
    //                 <div  className="filled"  style={{width:'80%'}}>
                        
    //                 </div>
    //             </div>
    //         </div>

    //     </div>

    // </div>
    //  )
 }
 const Interest=()=>{
  return(
     <div className="skills">
   <ul>
     <li>Javascript Libraries</li>
     <li>App Development</li>
     <li>FrontEnd Development</li>
     <li>Mern Stack Develoment</li>
     <li>Block Chain</li>
   </ul>
    
 </div>
  )
}
 const MapDetails=[<Education/>,<Skills/>,<WorkHistory/>,<Projects/>,<Interest/>]

const ResumeSection =()=>{
    
    const [index,setIndex]= useState(0)
    return(
      <>
       <div className='resumeSection'>
        {/* <div>
            <h2>Resume</h2>
            <p>Formal Bio Details</p>
        </div> */}
           
        <div className="resumeBox"
         style={{display:'flex',flexDirection:'row',height:400,outline:'none'}}
         >
            <div className="headingSection">
                <div className="heading">
                 {data.map((res,i)=>{
                     const bgColor= i===index?' rgba(0,172,193,1)':null
                     return(
                         <div style={{padding:7,backgroundColor:bgColor, opacity:i===index? 0.7:1}}>
                             <h4 onClick={()=>{setIndex(i)}}>{res}</h4>
                         </div>
                     )
                 })}
                </div>
            </div>
        <div className="detailsSection" style={{overflow:'auto'}}>
       {/* <h2>{index}</h2> */}
     {MapDetails[index]}
        </div>
       
       
           

      </div>
      </div>
      </>
        
    
    )
}

export default ResumeSection