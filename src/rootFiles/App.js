import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleEdit } from "../components/actions/todoListStyle";
import TodoListStyleForm from "../components/TodoListStyleForm";

function App1(props) {

  return (

    <div style={props.style} id="background">
     <TodoListStyleForm />
      <TodoList />
    </div>

  );
}
const mapStateToProps = (state) => {

  return {
    style: state.todoListStyle.default,
    editMode : state.todoListStyle.editMode,
  }
}
export default connect(mapStateToProps, {toggleEdit})(App1);
