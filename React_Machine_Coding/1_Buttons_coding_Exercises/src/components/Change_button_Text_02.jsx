// When user clicks button, text should change.

import React from "react";
import {useState} from "react";

const Change_button_Text_02 = () =>{

 const [text,setText]=useState("Click Me");

 const handleClick =()=>{
       setText("Clicked !!")
 };

    return(
        <>
        <button onClick={handleClick}>{text}</button>
        </>
    )
};

export default Change_button_Text_02;
