export const TodoList = ({todos}) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            // onChange={}
          />
          <p>{todo.text}</p>
          <button type="button" onClick>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
