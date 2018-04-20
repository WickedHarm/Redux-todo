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