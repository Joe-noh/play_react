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

  render() {
    return (
      <TodoList todos={this.state.todos} />
    );
  }
}

export default App;
