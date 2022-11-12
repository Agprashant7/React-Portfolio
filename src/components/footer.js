import React from "react";
 import './footer.css';
 import { FaGithub, FaLinkedin,FaCodepen,FaInstagram,FaPhone,FaMailBulk } from 'react-icons/fa';
const Footer=()=>{
    return(
<div className='footer' style={{display:'flex',justifyContent:'space-around',marginTop:20}}>
        <div style={{margin:10}}>
          <h3 >Prashant A Ganiger</h3>
          <p>FrontEnd Engineer- Web/Mobile</p>
         <a href="https://codepen.io/agprashant7" target={'_blank'}> <FaCodepen style={{marginRight:20}} size={25} /></a>
         <a href="https://github.com/Agprashant7" target={'_blank'}>  <FaGithub style={{marginRight:20}} size={25} onClick={()=>{console.log("CLIECKEd")}} /></a>
        </div>
        <div style={{margin:10,width:'auto'}}>
          <h3>Get In Touch</h3>
          <div className="social-icon" >
          <a href="tel:8050699240" target={'_blank'}>  <FaPhone size={25} style={{marginRight:20}} /></a>
          <a href="mailto:prashantaganiger@outlook.com" target={'_blank'}>  <FaMailBulk style={{marginRight:20}}  size={25} /></a>
          <a href='https://www.linkedin.com/in/agprashant7/' target={'_blank'}> <FaLinkedin style={{marginRight:20}}  size={25} /></a>
      
          <a href="https://www.instagram.com/prashant_.ag/" target={'_blank'}>   <FaInstagram style={{marginRight:20}}  size={25} /></a>
          </div>
        </div>

       </div>
    )
}

export default Footer