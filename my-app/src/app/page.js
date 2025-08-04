'use client'
import { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

export default function HomePage() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos") || "[]")
    setTodos(stored)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addOrUpdateTodo = () => {
    if (!input.trim()) return
    if (editIndex !== null) {
      const updated = [...todos]
      updated[editIndex].text = input
      setTodos(updated)
      setEditIndex(null)
    } else {
      setTodos([...todos, { text: input, done: false }])
    }
    setInput("")
  }

  const toggleDone = (i) => {
    const updated = [...todos]
    updated[i].done = !updated[i].done
    setTodos(updated)
  }

  const deleteTodo = (i) => {
    setTodos(todos.filter((_, index) => index !== i))
  }

  const editTodo = (i) => {
    setInput(todos[i].text)
    setEditIndex(i)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 space-y-4">
        <h1 className="text-3xl font-bold text-center text-purple-700">📝 Todo List</h1>
        <TodoForm
          input={input}
          setInput={setInput}
          addOrUpdateTodo={addOrUpdateTodo}
          editIndex={editIndex}
        />
        <TodoList
          todos={todos}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  )
}