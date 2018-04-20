import React from "react";
import {Statistic} from "./Statistics";
import {StopWatch} from "./StopWatch"

export function Header(props) {
    
        let len = props.data.length;
        let list = props.data.filter( item => item.completed).length;
    
    return (

        <header className={len !== list ? "" : "well-done"}>
            <Statistic data={props.data}/>
            <span className="app-title">{props.title}</span> 
            <StopWatch />
        </header>
    )
}