import React from "react";
import Button from "./Button";

export class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        let title = this.state.value;
        if (title) {
            this.props.onAdd(title)
            this.setState({
                value: ""
            })
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.value} type="text" onChange={this.handleChange}/>
                <Button className="add" >Добавить</Button>
            </form>
        )
    }

}