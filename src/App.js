import React, { Component } from 'react';
import {todos} from "./data"
import './App.css';



import {Header} from "./components/Header"
import {TodoList} from "./components/TodoList"
import {Form} from "./components/Form"


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: todos
      
    }
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
        <Header title="React Todo" data={this.state.todos}/>
        <TodoList data={this.state.todos} handleClick={this.handleClick} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        <Form onAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
