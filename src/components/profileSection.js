import React from "react";
import './profileSection.css'
import Button from "./button";
import Typical from 'react-typical';
import { Consumer } from "../context";
import { useContext } from 'react';
const ProfileSection=()=>{
 
  const contextValue=useContext(Consumer)
  
    return(
        <div className="profileContainer" style={{marginTop:10,padding:10,display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        
        <div className='subContainerOne'
        >
        <div className="logoCOntainer">

        </div>
        <div className="profileHeading">
          <h5> {contextValue.name}</h5>
        </div>
        <div>
        <Typical
        steps={contextValue.typicalSkills}
        loop={Infinity}
        wrapper='h4'
       
      />
        </div>
        <div className="profileDesc">
         <p>{contextValue.profileDescription}</p>
        </div>
        <div className="profileButton" style={{display:'flex',flexDirection:'row',justifyContent:'center', gap:'12px'}}>
<Button label={contextValue.resumeDownloadBtn} onClick={()=>{
  window.open(contextValue.resumeLink,'_blank')
}} />
<Button label={contextValue.callBtn}onClick={()=>{
  window.open(contextValue.mobileNo)
}} />
        </div>
        </div>
      </div>
    )
}

export default ProfileSection