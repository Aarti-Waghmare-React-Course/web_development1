// Whatever you type in the input should appear below

import react from 'react';
import {useState} from 'react';

const TextMirror_05 =()=>{
    const [text,setText]=useState('');

    return(
        <div>
        <input onChange={(e)=>setText(e.target.value)}/>
        <p>You type: {text}</p>
        </div>
    );
};
export default TextMirror_05;