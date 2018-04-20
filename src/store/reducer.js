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

const reducer = (state=initialState, action) => {
   return state;
}

export default reducer;