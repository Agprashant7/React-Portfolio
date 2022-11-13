import React from "react";
// import Icon from 'react-web-vector-icons';
import './profileSection.css'
// import avatar from './Logo.png'
import Button from "./button";
import Typical from 'react-typical'
const ProfileSection=()=>{
 
  
  
    return(
        <div className="profileContainer" style={{marginTop:10,padding:10,display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        
        <div className='subContainerOne'
        >
        <div className="logoCOntainer">

        </div>
        <div className="profileHeading">
          <h5> Hello I'm Prashant </h5>
        </div>
        <div>
        <Typical
        steps={['UI Developer', 1500, 'MERN Developer', 1500,'App Developer', 1500,'JavaScript Enthaustic', 1500]}
        loop={Infinity}
        wrapper='h4'
       
      />
        </div>
        <div className="profileDesc">
         <p>Software Engineer having experience in building Web applications and Mobile applications over the MERN stack and React Native </p>
        </div>
        <div className="profileButton" style={{display:'flex',flexDirection:'row',justifyContent:'center', gap:'12px'}}>
<Button label={'Download Resume'} onClick={()=>{
  window.open('https://drive.google.com/file/d/1ZUA97EPGj_mG8SR10dGJt8VXM6H15jin/view','_blank')
}} />
<Button label={'Call Me'}onClick={()=>{
  window.open('tel:8050699240')
}} />
        </div>

        </div>
        {/* <div className='subContainerTwo' style={{marginTop:20,height:300,width:'30%'}}>
<img src={avatar} alt="pic" className="imgStyle" />
</div>

         */}
      </div>
    )
}

export default ProfileSection