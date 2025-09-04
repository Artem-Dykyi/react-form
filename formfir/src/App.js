import { Component } from "react";
import "./App.css";
import { Info } from "./components/Info";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/Filter";
import todo from "./todo.json";

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


  render() {
    const { todos } = this.state;
    const everyTask = todos.length;
    const finished = todos.filter((t) => t.completed).length;

    return (
      <div className="App">
        <Info everyTask={everyTask} finished={finished} />
        <TodoEditor
          onAddTodo = {this.addTodo}
        />
        <Filter />
        <TodoList
          todos={todos}
        />
      </div>
    );
  }
}

export default App;
