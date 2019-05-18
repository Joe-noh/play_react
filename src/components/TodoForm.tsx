import React, { ChangeEvent, FormEvent } from 'react'

interface Props {
  onSubmit: (title: string) => void
}

interface State {
  title: string
}

class TodoForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({title: event.target.value})
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const title = this.state.title.trim()

    if (title !== '') {
      this.props.onSubmit(title)
      this.setState({title: ''})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={this.state.title} onChange={this.handleChange.bind(this)} />
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default TodoForm
