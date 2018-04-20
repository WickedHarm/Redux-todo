import React, { Component } from "react";
import { connect } from "react-redux";
import { TodoList } from "../components/TodoList";

function mapStateToProps(state) {
    return {
        todos: state
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}


const ListContainer = connect(mapStateToProps)(TodoList);
