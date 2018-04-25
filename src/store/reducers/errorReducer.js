

const errorReducer = ( state={error:false}, action ) => {
    switch(action.type) {
        case "ERROR":
            return {
                ...state,
                error: action.error,
                message: action.message
            }

        case "NO_ERROR":
            return {
                ...state,
                error: false
            }    

        default: 
            return state;    
    }
}

export default errorReducer;