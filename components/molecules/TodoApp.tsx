import { useState } from 'react'

export default function TodoApp() {
  const [todos, setTodos] = useState<string[]>([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = (todo: string) => {
    setTodos([...todos, todo])
    setNewTodo('')
  }
  const removeTodo = (todo: string) => {
    setTodos(todos.filter((el) => el !== todo))
  }

  return (
    <div className="flex flex-col justify-center">
      <h1 className="flex justify-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-xl font-bold text-transparent drop-shadow-lg">
        TODO APP
      </h1>

      <div className="flex justify-center py-6">
        <form
          action="submit"
          name="addTodo"
          data-testid="addTodo"
          onSubmit={(e) => {
            e.preventDefault()
            return newTodo && addTodo(newTodo)
          }}
        >
          <input
            type="string"
            value={newTodo}
            className="rounded-lg border-2 p-2"
            name="todoInput"
            data-testid="input"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button data-testid="createButton">add</button>
        </form>
      </div>
      <div className="flex justify-center py-6">
        <ul>
          {todos.map((todo, index) => (
            <li
              data-testid="todo"
              className="flex w-72 justify-between p-3"
              key={index}
            >
              {todo}
              <span
                onClick={() => removeTodo(todo)}
                className="bg-red-500 px-3 text-lg hover:cursor-pointer"
              >
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
