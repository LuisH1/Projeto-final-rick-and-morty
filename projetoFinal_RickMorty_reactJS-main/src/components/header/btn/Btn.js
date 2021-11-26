import React from "react";
import "./btn-style.css"

export default function Btn(props) {
    return(
    <>
        <a id='a'>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
            {props.text}
        </a>
    </>
    )
    
}