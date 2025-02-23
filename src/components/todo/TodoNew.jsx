import { useState } from "react";

const TodoNew = (props) => {

  //useSate hook
  //const valueinput = "eric";

  const [valueinput, setValueInput] = useState("eric")
  const {addNewTodo} = props;

  const handleClick = () =>{
    console.log(valueinput)
  }
  const handleOnChange = (name) => {
    setValueInput(name)
  }
  // addNewTodo("eric")

    return (
        <div className='todo-new'>
        <input type="text"
          onChange={(event) => {handleOnChange(event.target.value)}}
        />
        <button
          style={{cursor: "pointer"}}
          onClick={handleClick}
        >ADD</button>

        <div>
          My text input is = {valueinput}
        </div>
      </div>
    )
}

export default TodoNew;