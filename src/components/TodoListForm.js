import { connect } from "react-redux";
import { addTodo, onChangeHander, removeComplete } from "./actions/todoListAction";

const TodoListForm = (props) => {
    const add = () => {
        const obj = {
            id : Date.now(),
            completed : false,
            name : props.addedTodo,
        }
        props.addTodo(obj);
    }
    return(
        <div style = {{display : "flex", flexDirection : "column"}} >
             <button onClick = {()=> props.removeComplete()} style = {{marginBottom : "1rem"}} className="add">Clear Completed</button>
             <div id = "form">
            <button disabled ={!props.addedTodo} onClick = {add}className = "add">Add</button>
            <input value = {props.addedTodo}
            onChange={(e)=> props.onChangeHander(e.target.value)} type = "text" />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        addedTodo : state.todoList.addedTodo,
    }
}


export default connect(mapStateToProps,{addTodo, onChangeHander, removeComplete})(TodoListForm);