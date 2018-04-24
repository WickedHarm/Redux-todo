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
    return axiosInstance.delete(`/todos/${id}.json`)
        .then( response => ({
            type: "DELETE",
            id: id
        }) )
    
}

export function editTodo(id, title) {
    return axiosInstance.patch(`/todos/${id}/.json`, {
        title: title
    })
        .then( response => ({
            type: "EDIT",
            id: id,
            title: title
        }) )
    
}

export function toggleTodo(id, completed) {
    return axiosInstance.patch(`/todos/${id}.json`, {
        completed: !completed
    })
        .then( response => ({
            type: "TOGGLE",
            id: id,
            completed: response.completed
        }) )
    
 
}

export function getTodoList(todoList) {
    
    return {
        type: "GET",
        todos: todoList
    }
}