import React,{useState} from "react";

const Disable_button_Text_03 = ()=>{

    const [disable,setDisable]=useState(false);
    const handleClick=()=>{
        setDisable(true)
    };
    return(
        <>
         <button disabled={disable} onClick={handleClick}>Click Me</button>
        </>
    )
}

export default Disable_button_Text_03;