import { useState } from "react";

import "../ToDoList/style.css";
import "./style.css";

const Form = ({ todoItens, setTodoItem }) => {
  const [itemValue, setItemValue] = useState("");

  const addItem = (toDo) => {
    setTodoItem([...todoItens, toDo]);
    setItemValue("");
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={formSubmit}>
      <input
        placeholder="new task..."
        value={itemValue}
        onChange={(event) => setItemValue(event.target.value)}
        className="input"
      ></input>
      <button className="button" onClick={() => addItem(itemValue)}>
        adicionar
      </button>
    </form>
  );
};

export default Form;
