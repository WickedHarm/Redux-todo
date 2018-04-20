import { connect } from "react-redux";
import { Form } from "../components/Form";
import * as actions from "../store/actions";

function mapDispatchToProps(dispatch) {
    return {
        onAdd: title => dispatch(actions.addTodo(title))
    }
}

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;