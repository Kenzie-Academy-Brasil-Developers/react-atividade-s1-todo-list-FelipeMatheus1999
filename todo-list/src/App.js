import "./App.css";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";

function App() {
  const [todoItens, setTodoItem] = useState([]);

  const handleClick = () => {
    const filteredItems = todoItens.filter((item) => {
      /** Resolver o problema do handleClick */
    });

    setTodoItem([filteredItems]);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Form
          todoItens={todoItens}
          setTodoItem={setTodoItem}
          handle={handleClick}
        />
        <ToDoList todoItens={todoItens} />
      </div>
    </div>
  );
}

export default App;
