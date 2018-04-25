import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

import TodoItem from "./TodoItem";

export class TodoList extends React.Component {
   
    componentDidMount() {
       
        this.props.getTodoList()
    }

    render() {
        const list = this.props.todos.map(item =>
            <TodoItem 
                 key={item.id}
                 title={item.title}
                 completed={item.completed}
                 handleComplete={() => this.props.onToggle(item.id, item.completed)} 
                 handleDelete={() => this.props.onDelete(item.id)}
                 handleEdit = {(title) => this.props.onEdit(item.id, title)}
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
}

