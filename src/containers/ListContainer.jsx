
import { connect } from "react-redux";
import { TodoList } from "../components/TodoList";
import * as actions from "../store/actions";

function mapStateToProps(state) {
    return {
        todos: state.reducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => {
            dispatch(actions.spinnerOn())
            dispatch(actions.removeTodo(id))
                .then(() => dispatch(actions.spinnerOff()))
                .then( () => dispatch(actions.noError()) )
                .catch( (e)=> dispatch(actions.error(e)) )
        },
        onEdit: (id, title) => {
            dispatch(actions.spinnerOn())
            dispatch(actions.editTodo(id, title))
                .then(() => dispatch(actions.spinnerOff()))
                .then( () => dispatch(actions.noError()) )
                .catch( (e)=> dispatch(actions.error(e)) )
        },
        onToggle: (id, completed) => {
            dispatch(actions.spinnerOn())
            dispatch(actions.toggleTodo(id, completed))
                .then(() => dispatch(actions.spinnerOff()))
                .then( () => dispatch(actions.noError()) )
                .catch( (e)=> dispatch(actions.error(e)) )
        },
        getTodoList: (resp) => {
            dispatch(actions.spinnerOn())
            dispatch(actions.getTodoList(resp))
                .then(() => dispatch(actions.spinnerOff()))
                .then( () => dispatch(actions.noError()) )
                .catch( (e)=> dispatch(actions.error(e)) )
        }
    }
}


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default ListContainer;
