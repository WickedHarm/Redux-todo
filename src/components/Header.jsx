import React from "react";
import {Statistic} from "./Statistics";
import {StopWatch} from "./StopWatch"

export function Header(props) {
    
        let len = props.todos.length;
        let list = props.todos.filter( item => item.completed).length;
    
    return (

        <header className={len !== list ? "" : "well-done"}>
            <Statistic data={props.todos}/>
            <span className="app-title">Redux Todo</span> 
            <StopWatch />
        </header>
    )
}