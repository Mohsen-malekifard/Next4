import TodoItem from "./TodoItem"

export default function TodoList({ todos, toggleDone, deleteTodo, editTodo }) {
  return (
    <ul className="space-y-3">
      {todos.map((todo, i) => (
        <TodoItem
          key={i}
          todo={todo}
          i={i}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  )
}