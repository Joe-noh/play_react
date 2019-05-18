import React from 'react'
import './TodoItem.css'
import { Todo } from '../types/Todo'

interface Props {
  todo: Todo,
  onClick: () => void
}

const TodoItem: React.FC<Props> = (props) => {
  const className: string = [
    'TodoItem',
    props.todo.done ? 'done' : ''
  ].join(' ')

  return (
    <li className={className} onClick={props.onClick}>{props.todo.title}</li>
  );
}

export default TodoItem;
