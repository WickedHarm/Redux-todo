
import { connect } from "react-redux";
import { TodoList } from "../components/TodoList";
import * as actions from "../store/actions";

function mapStateToProps(state) {
    return {
        todos: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(actions.removeTodo(id)),
        onEdit: (id, title) => dispatch(actions.editTodo(id, title)),
        onToggle: (id) => dispatch(actions.toggleTodo(id)),
        getTodoList: (resp) => dispatch(actions.getTodoList(resp))
    }
}


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default ListContainer;
