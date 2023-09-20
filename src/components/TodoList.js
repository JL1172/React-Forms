import React from "react";
import TodoListDisplay from "./TodoListDisplay";
import TodoListForm from "./TodoListForm";

export default function TodoList() {
    return(
        <div id = "container">
            <TodoListForm />
            <TodoListDisplay />
        </div>
    )
}