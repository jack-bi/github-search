import React, { Component } from 'react';

export default class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">搜尋</label>
        <input type="search" 
              onChange={this.onSearchChange}
              name="search" 
              ref={(input) => this.query = input}
              placeholder="輸入搜尋關鍵字..." />
      </form>
    );
  }
}