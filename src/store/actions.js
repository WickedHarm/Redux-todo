let nextId = 5;

export function addTodo(title) {
    return {
        type: "ADD",
        template: {
            id: nextId++,
            title: title,
            completed: false
        }
    }
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
    console.log(todoList)
    return {
        type: "GET",
        todos: todoList
    }
}