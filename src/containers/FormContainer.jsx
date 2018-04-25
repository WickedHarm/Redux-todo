import { connect } from "react-redux";
import { Form } from "../components/Form";
import * as actions from "../store/actions";

function mapDispatchToProps(dispatch) {
    return {
        onAdd: (title, todoLen) => {
            dispatch(actions.spinnerOn())
            dispatch(actions.addTodo(title, todoLen)).then(() => dispatch(actions.spinnerOff()))
        }
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.reducer
    }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;