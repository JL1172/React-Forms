import { connect } from "react-redux";
import { toggleComplete } from "./actions/todoListAction";


const TodoListDisplay = (props) => {
    return (
        <div id = "card">
            {props.todos.map(n => {
                return <div className= {n.completed ? "completed" : ""} 
                onClick={()=>props.toggleComplete(n.id)} 
                key = {n.id}>{n.name}</div>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos : state.todoList.todos,
        style : state.todoListStyle.cardStyle,
    }
}

export default connect(mapStateToProps, {toggleComplete})(TodoListDisplay);