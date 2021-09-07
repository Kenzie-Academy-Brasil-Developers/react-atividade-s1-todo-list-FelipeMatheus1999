import "./style.css";

const ToDoList = ({ todoItens, handleClick }) => {
  return (
    <ul className="toDoList">
      {todoItens &&
        todoItens.map((value, index) => {
          return (
            <li className="toDoList__li">
              {value}
              <button onClick={handleClick} className="button">
                concluded
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ToDoList;
