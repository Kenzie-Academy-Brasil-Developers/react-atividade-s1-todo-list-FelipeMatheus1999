import "./App.css";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";

function App() {
  const [todoItens, setTodoItem] = useState([]);

  const handleClick = (evt) => {
    const removedItem = evt.target.id;
    console.log(removedItem);
    const filteredItems = todoItens.filter((item) => item !== removedItem);

    setTodoItem([...filteredItems]);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Form todoItens={todoItens} setTodoItem={setTodoItem} />
        <ToDoList todoItens={todoItens} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
