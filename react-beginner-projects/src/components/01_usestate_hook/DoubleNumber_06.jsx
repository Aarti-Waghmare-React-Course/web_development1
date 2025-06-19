// Start with a number and double it on button click.
import react from 'react';
import {useState} from 'react';

const DoubleNumber_06=()=>{
    const [num,setNum]=useState(1);

    const handleDouble=()=>{
        setNum(num*2);
    };

    return(
        <div>
            <button onClick={handleDouble}>Double</button>
         <h1>Number : {num}</h1>
        </div>
    );
};

export default DoubleNumber_06;