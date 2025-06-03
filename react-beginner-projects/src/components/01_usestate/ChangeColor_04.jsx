// 5. Color Changer
// Build a component with a button that changes the background color of a div randomly when clicked.
// Concepts: state, inline styles, event handling.


import react from 'react';
import {useState} from 'react';

const ChangeColor_04 = () => {

    const [color,setColor] = useState('skyblue');

    const handleColor=()=>{
        setColor('red');
    };

    return (
        <div>
         <p>Current Color : {color}</p>
         <button onClick={handleColor}>Change Color</button>
        </div>
    );
};

export default ChangeColor_04;