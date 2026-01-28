function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className="todo-card">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <p className={todo.completed ? "completed" : ""}>{todo.text}</p>
      <button onClick={() => deleteTodo(todo.id)}>🗑</button>
    </div>
  );
}

export default TodoItem;
