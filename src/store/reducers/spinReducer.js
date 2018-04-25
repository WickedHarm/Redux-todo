


const spinReducer = (state={loading:false}, action) => {
    switch(action.type) {
        case "LOADING": 
            return {
                ...state,
                loading: true
            }

        case "LOADED":
            return {
                ...state,
                loading: false
            }

        default:
            return state   
    }
}

export default spinReducer;