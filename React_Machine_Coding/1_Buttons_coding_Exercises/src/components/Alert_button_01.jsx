
// create a button that shows alert when click

import React from "react";

const Alert_button_01 = ()=>{

    const handleClick=()=>{
        alert("Welcome!!!");
    }
    return(
       <>
       <button onClick={handleClick}>Click me</button>
       </>
    );
};

export default Alert_button_01;