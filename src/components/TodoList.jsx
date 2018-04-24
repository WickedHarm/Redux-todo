import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import axiosInstance from "../axios";

import TodoItem from "./TodoItem";

export class TodoList extends React.Component {

    componentDidMount() {
         axiosInstance.get("/todos.json")
            .then( response =>  {
                this.props.getTodoList(response.data)
        } )
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

