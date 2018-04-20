import React from "react";

export default function Button(props) {
    return (
        <button onClick={props.onClick}  className={props.className}>
            <i className={`material-icons ${props.className}`}>{props.btnType ? props.btnType : props.children}</i>
        </button>
    )
}

