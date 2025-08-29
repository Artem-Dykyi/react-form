export const TodoList = (todos)=>{
    return(
        <div>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <input
                     type="checkbox" 
                     name="" 
                     id="" />
                    <p>{todo.text}</p>
                    <button type="button">Delete</button>
                </li>
            ))}
        </div>
    )
}

export default TodoList;
