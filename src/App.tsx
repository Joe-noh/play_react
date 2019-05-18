import React from 'react';
import { Todo } from './types/Todo';
import TodoList from './components/TodoList';

interface State {
  todos: Todo[]
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      todos: [
        new Todo('buy some more milk.'),
        new Todo('build something great.'),
        new Todo('bake cookies')
      ]
    }
  }

  toggle(id: string) {
    const todos = this.state.todos.map((todo: Todo) => {
      if (todo.id === id) {
        return {...todo, done: !todo.done}
      } else {
        return todo
      }
    })

    this.setState({todos})
  }

  render() {
    return (
      <TodoList todos={this.state.todos} onToggle={this.toggle.bind(this)} />
    );
  }
}

export default App;
