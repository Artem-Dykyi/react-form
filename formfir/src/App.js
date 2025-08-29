import { Component } from 'react';
import './App.css';
// import { Info } from './components/Info';
import TodoList from "./components/TodoList"
import TodoEditor from "./components/TodoEditor"
import Filter from './components/Filter';


export class App extends Component {
  state={
    // todos: initialTodos,
    filter: '',
  }

  render(){

     return (
      <div className="App">
        {/* <Info/> */}
        <TodoEditor/>
        <Filter/>
        <TodoList/>

      </div>
  );
  }
 
}

export default App;
