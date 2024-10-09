import { Form } from "react-router-dom";
import { useState, useRef } from "react";



function UserForm() {
    const [name, setName] = useState('');
    const nameInputRef = useRef(null);
    const dropInputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        const nameInputValue = nameInputRef.current.value;
        const dropInputValue = dropInputRef.current.value;
        alert(nameInputValue + " " + dropInputValue);
    }

    function handleChange(e) {

        console.log(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            {/* <input type="text" onChange = {(event) => setName(event.target.value)} /> */}
            <input type="text" ref={nameInputRef} />
            <select onChange={handleChange} ref={dropInputRef}>
                <option value="grapeFruit">Grape Fruit</option>
                <option value="Lime">Lime</option>
                <option value="Coconut">Coconut</option>
                <option value="Mango">Mango</option>
            </select>

            <button onClick={handleSubmit}> Submit</button>
        </form>
    ) 
}
export default UserForm;