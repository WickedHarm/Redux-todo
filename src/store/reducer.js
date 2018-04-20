const initialState = {
    todos: [
        {
            id: 1,
            title: 'Изучить JavaScript',
            completed: true
        },
        {
            id: 2,
            title: 'Изучить React',
            completed: true
        },
        {
            id: 3,
            title: 'Изучить Redux',
            completed: false
        }
    ]
}

const reducer = (state=initialState.todos, action) => {
    switch(action.type) {
        case "ADD": 
            return [...state, action.template];

        case "DELETE":
           return state.filter( item => action.id !== item.id )

        default: 
            return state
    }
    
   
}

export default reducer;