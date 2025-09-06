import styled from "styled-components";

const BoxItem = styled.li`
    display: flex;
    justify-content: space-between;
    width: 500px;


`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    background: pink;

    justify-content: center; /* по горизонталі */
    align-items: center;     
    gap: 30px;
    width: 700px;

    margin-top: 30px;
    outline: solid black 2px;
`

const Btn = styled.button`
  background: orange;
  width: 75px;
  border: none;
  border-radius: 25px;

  margin-left: 50px;
`



export const TodoList = ({ todos, deleteId, filter }) => {
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box>
      {filteredTodos.map((todo) => (
        <BoxItem key={todo.id}>
          <input type="checkbox" checked={todo.completed} />
          <p>{todo.text}</p>
          <Btn type="button" onClick={() => deleteId(todo.id)}>
            Delete
          </Btn>
        </BoxItem>
      ))}
    </Box>
  );
};

export default TodoList;
