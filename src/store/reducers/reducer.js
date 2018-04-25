


const reducer = (state=[], action) => {
    
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
            
        case "GET": 
            return action.todos   
            

        default: 
            return state
    }
    
   
}

export default reducer;