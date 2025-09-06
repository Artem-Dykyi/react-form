import { Component } from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: orange;
  width: 200px;
  padding: 10px;


`
const Input = styled.input`
  padding: 20px 70px;
  width: 500px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

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
      <Form action="" onSubmit={this.handleSubmit}>
        <Input
          type="text"
          value={textValue}
          onChange={this.handleChange}
          placeholder="Нове завдання..."
        />

        <Btn type="submit">Create</Btn>
      </Form>
    );
  }
}

export default TodoEditor;
