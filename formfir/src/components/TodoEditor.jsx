import { Component } from 'react';

export class TodoEditor extends Component {
    state={
        textValue: '',
    }

addTask=()=>{
  
}

  render(){

     return (
      <form action="">
        <input type="text" />
        <button>Create</button>
      </form>
  );
  }
 
}

export default TodoEditor;