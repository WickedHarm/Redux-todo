
import { connect } from "react-redux";
import { TodoList } from "../components/TodoList";

function mapStateToProps(state) {
    return {
        todos: state
    }
}



const ListContainer = connect(mapStateToProps)(TodoList);

export default ListContainer;
