// Toggle button text between ON and OFF.

import React ,{useState} from 'react';

const Toggle_button_On_Off_04 = ()=>{

    const [isOn,setIsOn]=useState(false);

    const handleClick = ()=>{
        setIsOn(!isOn)
    };

    return(
        <>
        <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
        </>
    )
};

export default Toggle_button_On_Off_04;