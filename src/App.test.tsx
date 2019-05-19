import React from 'react'
import ReactDOM from 'react-dom'
import { Simulate } from 'react-dom/test-utils';
import App from './App'

let root: HTMLElement

beforeEach(() => {
  root = document.createElement('div')
  ReactDOM.render(<App />, root)
})

afterEach(() => {
  ReactDOM.unmountComponentAtNode(root)
})

it('can add a todo', () => {
  const todo = 'Write some more test cases.'
  const input = root.querySelector('input[type="text"]')
  const form = root.querySelector('form')

  expect(root.textContent).not.toContain(todo)

  Simulate.change(input, { target: { value: todo } })
  Simulate.submit(form)

  expect(root.textContent).toContain(todo)
});

it('do nothing if todo title is empty', () => {
  const input = root.querySelector('input[type="text"]')
  const form = root.querySelector('form')

  Simulate.change(input, { target: { value: '    ' } })
  Simulate.submit(form)

  expect(root.textContent).not.toContain('    ')
})
