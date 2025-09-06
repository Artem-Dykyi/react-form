import { Component } from "react";

export class Filter extends Component {
  state = {
    searchValue: "",
  };

  handleChangeSearch = (e) => {
  this.setState({ searchValue: e.target.value });
  this.props.onFilter(e.target.value); 
};

  render() {
    return (
      <div>
        <p>Фільтр по імені</p>
        <input
          type="text"
          value={this.state.searchValue}
          onChange={this.handleChangeSearch}
        />
      </div>
    );
  }
}

export default Filter;
