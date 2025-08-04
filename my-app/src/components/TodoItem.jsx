export default function TodoItem({ todo, i, toggleDone, deleteTodo, editTodo }) {
  return (
    <li
      className={`flex items-center justify-between p-3 rounded-xl shadow ${
        todo.done ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleDone(i)}
          className="w-5 h-5 accent-purple-600"
        />
        <span
          className={`text-lg ${
            todo.done ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => editTodo(i)}
          className="text-blue-500 hover:text-blue-700"
        >
          ✏️
        </button>
        <button
          onClick={() => deleteTodo(i)}
          className="text-red-500 hover:text-red-700"
        >
          🗑️
        </button>
      </div>
    </li>
  )
}