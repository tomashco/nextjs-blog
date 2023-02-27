import { useState } from 'react'

export default function Calculator() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  const add = () => {
    setResult(num1 + num2)
  }
  const subtract = () => {
    setResult(num1 - num2)
  }
  const multiply = () => {
    setResult(num1 * num2)
  }
  const divide = () => {
    setResult(num1 / num2)
  }
  return (
    <div className="flex flex-col">
      <div className="flex-1 p-6" data-testid="result">
        <span className="text-xl font-bold">Result:&nbsp;</span>
        <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-xl font-bold text-transparent drop-shadow-lg">
          {result}
        </span>
      </div>
      <div className="flex justify-evenly">
        <input
          type="number"
          className="rounded-lg border-2 p-2"
          data-testid="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.valueAsNumber)}
        />
        <input
          type="number"
          className="rounded-lg border-2 p-2"
          data-testid="num2"
          value={num2}
          onChange={(e) => setNum2(e.target.valueAsNumber)}
        />
      </div>
      <div className="flex justify-evenly py-6">
        <button className="w-24 bg-gray-200" onClick={add} data-testid="add">
          Add
        </button>
        <button
          onClick={subtract}
          className="w-24 bg-gray-200"
          data-testid="subtract"
        >
          Subtract
        </button>
        <button
          onClick={multiply}
          className="w-24 bg-gray-200"
          data-testid="multiply"
        >
          Multiply
        </button>
        <button
          onClick={divide}
          className="w-24 bg-gray-200"
          data-testid="divide"
        >
          Divide
        </button>
      </div>
    </div>
  )
}
