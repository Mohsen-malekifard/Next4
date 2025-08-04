export default function TodoForm({ input, setInput, addOrUpdateTodo, editIndex }) {
  return (
    <div className="flex gap-2">
      <input
        className="flex-1 border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="کار جدید بنویس..."
      />
      <button
        onClick={addOrUpdateTodo}
        className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition"
      >
        {editIndex !== null ? "ویرایش" : "افزودن"}
      </button>
    </div>
  )
}