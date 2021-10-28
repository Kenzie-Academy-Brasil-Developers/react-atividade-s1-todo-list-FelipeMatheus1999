import "./style.css";

const ToDoList = ({ todoItens, handleClick }) => {
  return (
    <ul className="toDoList">
      {todoItens &&
        todoItens.map((value, index) => {
          return (
            <li key={index} className="toDoList__li">
              {value}
              <button id={value} onClick={handleClick} className="button">
                concluded
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ToDoList;
