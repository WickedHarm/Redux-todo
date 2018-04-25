import { connect } from "react-redux";
import { Header } from "../components/Header";

function mapStateToProps(state) {
    
    return {
        todos: state.reducer,
        spinner: state.spinReducer,
        errorReducer: state.errorReducer
    }
}




const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;