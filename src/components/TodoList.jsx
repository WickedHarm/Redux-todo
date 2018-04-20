import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"


import TodoItem from "./TodoItem";



export function TodoList(props) {
    const list = props.data.map(item =>
         <TodoItem 
              key={item.id}
              
              title={item.title}
              completed={item.completed}
              handleClick={() => props.handleClick(item.id)} 
              handleDelete={() => props.handleDelete(item.id)}
              handleEdit = {(title) => props.handleEdit(item.id, title)}
              />);
    return (
       
        <ReactCSSTransitionGroup 
        component="section" 
        className="todo-list"
        transitionName="slide"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        >
            {list}
        </ReactCSSTransitionGroup>
    )
    
}