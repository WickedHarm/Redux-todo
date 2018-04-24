import { connect } from "react-redux";
import { Form } from "../components/Form";
import * as actions from "../store/actions";

function mapDispatchToProps(dispatch) {
    return {
        onAdd: (title, todoLen) => dispatch(actions.addTodo(title, todoLen))
    }
}

function mapStateToProps(state) {
    return {
        todoLen: state.length
    }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;