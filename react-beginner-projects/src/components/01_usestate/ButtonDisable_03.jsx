//create a button add functionality to disable or visible 

import react from 'react';
import {useState} from 'react';

const ButtonDisable_03 = () => {

const [isDisable,setIsDisable] = useState(false);

const handleClick = () => {
    setIsDisable(true);
};

    return(
        <div>
          <button onClick={handleClick} disabled={isDisable}>Click Me</button>
        </div>
    );
};

export default ButtonDisable_03;