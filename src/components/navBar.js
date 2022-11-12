import React from "react";
 import './navBar.css';
// import classes from './navBar.css';
// console.log("Classes",classes)
import Logo from '../images/Logo.png'

const NavBar =()=>{
    return(
        <nav className='navigationConatiner'>
        <div className='leftNav'style={{marginTop:'20px'}}>
        <img src={Logo} alt="pic" className="imgStyle"  />
        </div>
        <div className="rightNav">
 {/* <span style={{margin:30}}>HOME</span><span style={{margin:30}}>ABOUT</span><span style={{margin:30}}>CONTACT US</span> */}
        </div>
      </nav>
    )
}

export default NavBar