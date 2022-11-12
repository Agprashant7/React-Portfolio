import React from "react";

const Button=({label,bgColor,onClick})=>{
    return(
        <button style={{padding:10,borderRadius:21,backgroundColor:bgColor?bgColor:"white",border:'none'}} onClick={onClick}>{label}</button> 
    )
}

export default Button