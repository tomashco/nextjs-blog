// import Home from '../pages/index'
import Calculator from '../components/molecules/Calculator'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, act } from '@testing-library/react'

describe('Calculator', () => {
  it('renders a calculator', () => {
    render(<Calculator />)
    // check if all components are rendered
    expect(screen.getByTestId('result')).toBeInTheDocument()
    expect(screen.getByTestId('num1')).toBeInTheDocument()
    expect(screen.getByTestId('num2')).toBeInTheDocument()
    expect(screen.getByTestId('add')).toBeInTheDocument()
    expect(screen.getByTestId('subtract')).toBeInTheDocument()
    expect(screen.getByTestId('multiply')).toBeInTheDocument()
    expect(screen.getByTestId('divide')).toBeInTheDocument()
  })
})

it('adds numbers', () => {
  render(<Calculator />)
  // check if adds properly
  const num1input = screen.getByTestId('num1')
  const num2input = screen.getByTestId('num2')
  const addButton = screen.getByTestId('add')
  const resultArea = screen.getByTestId('result')

  act(() => fireEvent.change(num1input, { target: { value: 5 } }))
  act(() => fireEvent.change(num2input, { target: { value: 8 } }))
  act(() => addButton.click())

  expect(resultArea).toHaveTextContent(13)
})

it('subtracts numbers', () => {
  render(<Calculator />)
  // check if adds properly
  const num1input = screen.getByTestId('num1')
  const num2input = screen.getByTestId('num2')
  const operateButton = screen.getByTestId('subtract')
  const resultArea = screen.getByTestId('result')

  act(() => fireEvent.change(num1input, { target: { value: 8 } }))
  act(() => fireEvent.change(num2input, { target: { value: 5 } }))
  act(() => operateButton.click())

  expect(resultArea).toHaveTextContent(3)
})

it('multiply numbers', () => {
  render(<Calculator />)
  // check if adds properly
  const num1input = screen.getByTestId('num1')
  const num2input = screen.getByTestId('num2')
  const operateButton = screen.getByTestId('multiply')
  const resultArea = screen.getByTestId('result')

  act(() => fireEvent.change(num1input, { target: { value: 3 } }))
  act(() => fireEvent.change(num2input, { target: { value: 5 } }))
  act(() => operateButton.click())

  expect(resultArea).toHaveTextContent('15')
})

it('divide numbers', () => {
  render(<Calculator />)
  // check if adds properly
  const num1input = screen.getByTestId('num1')
  const num2input = screen.getByTestId('num2')
  const operateButton = screen.getByTestId('divide')
  const resultArea = screen.getByTestId('result')

  act(() => fireEvent.change(num1input, { target: { value: 15 } }))
  act(() => fireEvent.change(num2input, { target: { value: 3 } }))
  act(() => operateButton.click())

  expect(resultArea).toHaveTextContent('5')
})
