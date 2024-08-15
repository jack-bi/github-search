import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import RepoList from './Components/RepoList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      repos: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'user') => {
    axios.get(`https://api.github.com/search/repositories?q=${query}`)
      .then(response => {
        this.setState({
          query: query,
          repos: response.data.items,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Github 資料庫搜尋 (預設關鍵字為：user)</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
             ? <p>載入中...</p>
             : <div><h2>關鍵字：{this.state.query}</h2><RepoList data={this.state.repos} /></div>
          }          
        </div>
      </div>
    );
  }
}
