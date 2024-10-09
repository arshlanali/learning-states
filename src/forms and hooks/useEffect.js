import React, {useState, useEffect} from "react"; 

function UseEffectHook(){
    const [counter, setCounter] = useState(0);
    useEffect( ()=>{
        console.log(counter, "counter updated");
        return () =>{
            
        }
    },[]); 


    return(
        <> 
        <p> {counter} </p>
        <button onClick={() => setCounter(counter+1)}>
        Increment
        </button>
        </>
    );
}

export default UseEffectHook;