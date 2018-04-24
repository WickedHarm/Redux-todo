import axiosInstance from "../axios";

let nextId = 5;

export function addTodo(title, todoLen) {
   return axiosInstance.put(`/todos/${todoLen}/.json`, {
        id: todoLen,
        title: title,
        completed: false
    }).then( response => response.data )
      .then( todo => ({
          type: "ADD",
          template: todo
      }) )   
   
}

export function removeTodo(id) {
    return {
        type: "DELETE",
        id: id
    }
}

export function editTodo(id, title) {
    return {
        type: "EDIT",
        id: id,
        title: title
    }
}

export function toggleTodo(id) {
    return {
        type: "TOGGLE",
        id: id
    }
}

export function getTodoList(todoList) {
    
    return {
        type: "GET",
        todos: todoList
    }
}