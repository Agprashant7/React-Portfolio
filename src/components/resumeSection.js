import React, { useState,useContext } from "react";
 import './resumeSection.css';
 import { Consumer } from "../context";

 function createMarkup(data) {
    return { __html: data };
  }
const ResumeSection =()=>{
    
    const [index,setIndex]= useState(0)
    const contextValue=useContext(Consumer)
 const WorkHistory=()=>{
return(
<>
    
       { contextValue?.workHistory?.map((details,i)=>{
            console.log("DETAILS",details)
            return(
        
                <div className="workHistory" >
                <div className="historyHeading" >
                    <h1>{details.company}</h1>
                     <p><div dangerouslySetInnerHTML={createMarkup(details.duration)}></div></p> 
                   
                    <h3>{details.designation}</h3>

                    <ul>
                        {details?.descriptionDetails?.map((description,i)=>{
                            return(
                                <li>{description}</li>
                            )
                           
                        })}
                    </ul>
                </div>
            </div>
             )
        })}
    
       </>
)
    
 }

 const Education=()=>{
     return(
        <div className="education">
        <h4>{contextValue.educationDetails[0].course}</h4>
        <p>{contextValue.educationDetails[0].duration}</p>
        <p>{contextValue.educationDetails[0].enggName}</p>
        <p>{contextValue.educationDetails[0].place}</p>
        

    </div>
     )
 }
 const Projects=()=>{
     return(
        <>
        {
            contextValue?.projectDetails?.map((project,i)=>{
                return(
                    <div className="projects">
                         <div className="projectHeading">
                             <h3>{project.name}</h3>
                             <a href={project.link}target={'_blank'}rel="noreferrer" ><h5>{project.displayName}</h5></a>
                            <p>{project.technology}<b>{project.languages}</b></p>
                            <p>{project.description}</p>
                            <hr></hr>
                        </div>
                        </div>
                )
            })
        }
        </>
     )
 }

 const Skills=()=>{
    return(
        <div>
            <div className="skillsContainer" >
            {
        contextValue?.skillsProgress?.map((res,i)=>{
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
 }
 const Interest=()=>{
  return(
     <div className="skills">
        <ul>
        {contextValue?.interest?.map((interest,i)=>{
            return(
               <li>{interest}</li>
            )
        })}
   </ul>
    
 </div>
  )
}
 const MapDetails=[<Education/>,<Skills/>,<WorkHistory/>,<Projects/>,<Interest/>]
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
                 {contextValue?.switchData?.map((res,i)=>{
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
     {MapDetails[index]}
        </div>
       
       
           

      </div>
      </div>
      </>
        
    
    )
}

export default ResumeSection
