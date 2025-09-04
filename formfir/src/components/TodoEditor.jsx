import { Component } from "react";

export class TodoEditor extends Component {
  state = {
    textValue: "",
  };

  handleChange = (e) => {
    this.setState({ textValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
   
    this.props.onAddTodo(this.state.textValue);
    this.setState({ textValue: "" });
  };

  render() {
    const { textValue } = this.state;

    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={textValue}
          onChange={this.handleChange}
          placeholder="Нове завдання..."
        />

        <button type="submit">Create</button>
      </form>
    );
  }
}

export default TodoEditor;
