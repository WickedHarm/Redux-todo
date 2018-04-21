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
           return state.filter( item => action.id !== item.id );

        case "EDIT": 
            return state.map( item => {
                if (item.id === action.id) {
                    if (action.title !== "") {
                        item.title = action.title

                    }
                    
                }
                
                return item;
            } )
             
            
        case "TOGGLE":
            return state.map( item => {
                if(item.id === action.id) {
                    item.completed = !item.completed
                }
                return item;
            } )    
            

        default: 
            return state
    }
    
   
}

export default reducer;