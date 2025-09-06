import { Component } from "react";
import "./App.css";
import { Info } from "./components/Info";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/Filter";
import todo from "./todo.json";
import styled from "styled-components";

const Box = styled.div`
    margin-left: auto;
    margin-right: auto;
    background: pink;

    justify-content: center; /* по горизонталі */
    align-items: center;     
 
    width: 700px;
`

export class App extends Component {
  state = {
    todos: todo,
    filter: "",
  };

  addTodo = (text) => {
    const newTodo = {
      id: Date.now(), 
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  delete = (id) =>{
    this.setState((prevState)=>({
      todos: prevState.todos.filter((t) => t.id !== id),
    }))
}

handleFilterChange = (value) => {
    this.setState({ filter: value });
  };



  render() {
    const { todos } = this.state;
    const everyTask = todos.length;
    const finished = todos.filter((t) => t.completed).length;

    return (
      <Box className="App">
        <Info everyTask={everyTask} finished={finished} />
        <TodoEditor
          onAddTodo = {this.addTodo}
        />
        <Filter onFilter={this.handleFilterChange}/>
        <TodoList
          todos={todos}
          deleteId = {this.delete}
           filter={this.state.filter}
        />
      </Box>
    );
  }
}

export default App;
