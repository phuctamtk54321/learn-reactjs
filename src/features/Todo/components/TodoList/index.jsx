import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};
function TodoList(props) {
  const handleTodoClick = (todo, idx) => {
    if (!props.onTodoClick) return;

    props.onTodoClick(todo, idx);
  };

  return (
    <ul className="todo-list">
      {props.todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classNames({ completed: todo.status === "completed" })}
          onClick={() => handleTodoClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
