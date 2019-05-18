import React from 'react'
import { Todo } from '../types/Todo'

interface Props {
  todo: Todo
}

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li>{props.todo.title}</li>
  );
}

export default TodoItem;
