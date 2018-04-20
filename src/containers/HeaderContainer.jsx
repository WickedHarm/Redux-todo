import { connect } from "react-redux";
import { Header } from "../components/Header";

function mapStateToProps(state) {
    return {
        todos: state
    }
}




const ListContainer = connect(mapStateToProps)(Header);

export default ListContainer;