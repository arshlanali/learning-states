import React, {useState} from "react";


function Hooks(){
    const [counter, setCounter] = useState(0);    
    const [name, setName] = useState('');
    return(
        <>
            <p>{counter}{name}</p>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <button onClick={() => setCounter(counter+1)}>Submit</button>
        </>
    );

}

export default Hooks;