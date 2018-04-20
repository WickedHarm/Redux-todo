import React from "react";
import Button from "./Button";


export default class Todo extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }
    toggleEdit(e) {
        e.preventDefault();
        this.setState({
            isEdit: !this.state.isEdit
        })
        if (this.state.isEdit) {
            this.props.handleEdit(this.refs.inputEdit.value);
        }
        
    }

   
   
    render() {
        return (
            <div className={`todo-item${this.props.completed ? ' completed' : ""}`}>
            <button onClick={this.props.handleClick}>
              <i className="material-icons checkbox" >{this.props.completed ? "check_box" : "check_box_outline_blank"}</i>
            </button>
            {this.state.isEdit ? 
            <form action="post" onSubmit={this.toggleEdit}>
                <input ref="inputEdit" defaultValue={this.props.title} type="text"/> 
            </form>
            :
            <span ref="todoTitle" className="todo-item-title">{this.props.title}</span>
            }
            <Button btnType={this.state.isEdit ? "save" : "edit"} className="btn edit" onClick={this.toggleEdit}/>
            <Button btnType="delete" className="btn delete" onClick={this.props.handleDelete}/>
        </div>
        )
    }
  
}