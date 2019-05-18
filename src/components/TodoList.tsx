import React from 'react'
import { Todo } from '../types/Todo'
import TodoItem from './TodoItem'

interface Props {
  todos: Todo[]
}

class TodoList extends React.Component<Props> {
  render() {
    const items = this.props.todos.map((todo: Todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))

    return (
      <ul>{items}</ul>
    );
  }
}

export default TodoList;
