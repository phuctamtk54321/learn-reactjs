import { useState } from "react";
import TodoList from "./components/TodoList";

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    console.log(todo, idx);
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    newTodoList[idx] = newTodo;
    setTodoList(newTodoList);
  };

  const handleShowAllCLick = () => {};

  const handleShowCompletedClick = () => {};

  const handleShowNewClick = () => {};

  return (
    <div>
      <h3>TodoList</h3>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllCLick}></button>
        <button onClick={handleShowCompletedClick}></button>
        <button onClick={handleShowNewClick}></button>
      </div>
    </div>
  );
}

export default TodoFeature;
