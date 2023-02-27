import TodoApp from '../components/molecules/TodoApp'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, act } from '@testing-library/react'
import { debug } from 'jest-preview'

describe('Todo App', () => {
  it('renders a todo app', () => {
    const doc = render(<TodoApp />)
    const inputElement = doc.getByTestId('input')
    const createButtonElement = doc.getByTestId('createButton')
    // check if all components are rendered
    expect(screen.getByTestId('input')).toBeInTheDocument()
    expect(screen.getByTestId('createButton')).toBeInTheDocument()
  })
})

it('adds a new todo', () => {
  const doc = render(<TodoApp />)

  const inputElement = doc.getByTestId('input')
  const createButtonElement = doc.getByTestId('createButton')

  // Create the todo.
  fireEvent.change(inputElement, { target: { value: 'This is a todo' } })
  fireEvent.click(createButtonElement)

  // const todos = doc.getAllByTestId('todo')
  const todo = doc.getByTestId('todo')
  const todoNameElement = todo.firstChild

  // The name should be in the document as "Feed my dog."
  expect(todoNameElement.textContent).toBe('This is a todo')
})
