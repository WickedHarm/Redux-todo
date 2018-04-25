import axiosInstance from "../axios";



export function addTodo(title, todoLen) {
    const id = Date.now();
   return axiosInstance.put(`/todos/${id}.json`, {
        id: id,
        title: title,
        completed: false
    }).then( response => ({
        type: "ADD",
        template: response.data 
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

export function getTodoList() {
   
   return axiosInstance.get("/todos.json")
    .then( response =>  {
        
        let todoArr = [];
        for (let key in response.data) {
            todoArr.push({
                id: response.data[key].id,
                title: response.data[key].title,
                completed: response.data[key].completed
            })
        }
        
       return todoArr;
      
       
} )
    .then( todoArr => ({
        type: "GET",
        todos: todoArr
    }) )
}


//////////////////Spinner////////////////////

export function spinnerOn() {
    return {
        type: "LOADING",
        loading: true
    }
}

export function spinnerOff() {
    return {
        type: "LOADED",
        loading: false
    }
}