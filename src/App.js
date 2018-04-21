import React, { Component } from 'react';

import './App.css';


import ListContainer from "./containers/ListContainer";
import HeaderContainer from "./containers/HeaderContainer";
import FormContainer from "./containers/FormContainer";


class App extends Component {
  constructor(props){
    super(props);
   
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  getId() {
    this._id = this._id || 4;
    return this._id++;

  }

  handleClick(id) {
    let todos = this.state.todos.map( item => {
      if(item.id === id) item.completed = !item.completed;
      return item;
    })
      this.setState({
        todos
    }) 
  }
  handleDelete(id) {
     let todos = this.state.todos.filter( item => item.id !== id)
     this.setState({
       todos
     })
  }

  handleAdd(title) {
      let newTodo = {
        id: this.getId(),
        title: title,
        completed: false
      }
      let todos = this.state.todos.concat(newTodo)
      this.setState({
            todos: todos
      })
  }
  handleEdit(id, title) {
    let todos = this.state.todos.map( (item) => {
      
      if (item.id === id) {
        console.log(item.title, title)
        item.title = title;
      }
      return item;
    })
    this.setState({
      todos
    })
  }
 

  render() {
  
    return (
      <div className="App">
        <HeaderContainer />
        <ListContainer />
        <FormContainer />
      </div>
    );
  }
}

export default App;
