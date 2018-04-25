import React from "react";
import {Statistic} from "./Statistics";
import {StopWatch} from "./StopWatch";
import Spinner from "./Spinner";

export function Header(props) {
        
        let len = props.todos.length;
        let list = props.todos.filter( item => item.completed).length;

        let title = props.spinner.loading ? <Spinner /> : <span className="app-title">Redux Todo</span>

        let headerClass = len !== list ? "" : "well-done";
        
        if (props.errorReducer.error) {
            title = <p className="error-message">Сервер недоступен</p>
            headerClass = "error";
        }
        
    return (

        <header className={headerClass}>
            <Statistic data={props.todos}/>
            {title}
            <StopWatch />
        </header>
    )
}