import React from "react";

const AddTodo = (props) => {
    const { Todo, setTodo, handleClickButton } = props;
    return (
        <div>
            <label>Add To Do</label><br />
            <input value={Todo} type="text" onChange={(event) => setTodo(event.target.value)} />
            <button type="button" onClick={() => handleClickButton()}> Submit</button>
        </div>
    )
}

export default AddTodo