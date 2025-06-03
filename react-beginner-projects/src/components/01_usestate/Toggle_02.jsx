// 3. Toggle Visibility
// Build a component with a button that shows/hides some text when clicked.
// Concepts: useState, conditional rendering.

import react from 'react';
import {useState} from 'react';

const Toggle_02 = () => {

    const [isHidden,setIsHidden] = useState(true);

    const ToggleVisibility = () =>{
        setIsHidden(!isHidden);
    };

    return(
        <div>
            <button onClick={ToggleVisibility}>Toggle Element</button>
            {isHidden ? <p>The element is hidden</p> : <h1>The element is visible</h1>}
        </div>
    );
};

export default Toggle_02;
