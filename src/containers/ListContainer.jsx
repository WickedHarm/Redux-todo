
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
        onDelete: id => dispatch(actions.removeTodo(id))
    }
}


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default ListContainer;
