import { connect } from "react-redux"
import { addNewStyle, onChangeHandlerForStyle, toggleEdit } from "./actions/todoListStyle"
import { keys } from "./arrayOfTodos/arrayOfColors";

const TodoListStyleForm = (props) => {
    const click = e => {
        e.preventDefault();
        if (props.styleChoice === "background") {
            props.addNewStyle("backgroundColor",props.newColor)
        } else {
            props.addNewStyle("backgroundImage",`linear-gradient(-45deg,${props.color1},${props.color2},${props.color3},${props.color4})`)
        }
    }
    return (
        <>
            <img onClick={() => props.toggleEdit()} id="img" src="https://www.svgrepo.com/show/111206/settings.svg" style={{ width: "20px" }} />
            <div id="settings" className={props.editMode ? "chosen" : "not"}>
                <h5>Settings : </h5>
                <form onSubmit={(e)=>click(e)} id="aF">
                    <div className="labelContainers">
                        <label htmlFor="lg">Background Color ? </label>
                        <input onChange={(e) => props.onChangeHandlerForStyle(e.target.name, e.target.value)}
                            name="styleChoice" checked={props.styleChoice === "background"} value="background" type="radio" />
                    </div>
                    <div>
                        <label htmlFor="lg">Gradient ?</label>
                        <input onChange={(e) => props.onChangeHandlerForStyle(e.target.name, e.target.value)}
                            name="styleChoice" checked={props.styleChoice === "linear"} value="linear" type="radio" />
                    </div>
                    <div>
                        {!props.styleChoice ? "" : <div>
                            <label>{props.styleChoice === "background" ? "Choose background color :" : "Choose Linear Gradient Colors"}</label>
                            {props.styleChoice === "background" ? <input value = {props.newColor} 
                            onChange={(e) => props.onChangeHandlerForStyle(e.target.name, e.target.value)} type="color" name="newColor" /> :
                                <div className = "containedBox">
                                    <div className = "contained" style={{display : "flex"}}>
                                    <select onChange={(e)=> props.onChangeHandlerForStyle(e.target.name,e.target.value)} name = "color1" value = {props.color1}>
                                        <option value = "">--Select First--</option>
                                        {props.choices.map((n,i)=> {
                                            return <option key = {i} value= {n}>{n}</option>
                                        })}
                                    </select>
                                    <input disabled = {true}  className = "color"  type = "color" value = {props.matchingColor[props.choices.indexOf(props.color1)]} />
                                    </div>
                                    <div className = "contained" style={{display : "flex"}}>
                                    <select onChange={(e)=> props.onChangeHandlerForStyle(e.target.name,e.target.value)} name = "color2" value = {props.color2}>
                                        <option value = "">--Select Second--</option>
                                        {props.choices.map((n,i)=> {
                                            return <option key = {i} value= {n}>{n}</option>
                                        })}
                                    </select>
                                    <input disabled = {true} className = "color"  type = "color" value = {props.matchingColor[props.choices.indexOf(props.color2)]} />
                                    </div>
                                    <div className = "contained" style={{display : "flex"}}>
                                    <select onChange={(e)=> props.onChangeHandlerForStyle(e.target.name,e.target.value)} name = "color3" value = {props.color3}>
                                        <option value = "">--Select Third--</option>
                                        {props.choices.map((n,i)=> {
                                            return <option key = {i} value= {n}>{n}</option>
                                        })}
                                    </select>
                                    <input  disabled = {true} className = "color"  type = "color" value = {props.matchingColor[props.choices.indexOf(props.color3)]} />
                                    </div>
                                    <div className = "contained" style={{display : "flex"}}>
                                    <select onChange={(e)=> props.onChangeHandlerForStyle(e.target.name,e.target.value)} name = "color4" value = {props.color4}>
                                        <option value = "">--Select Fourth--</option>
                                        {props.choices.map((n,i)=> {
                                            return <option key = {i} value= {n}>{n}</option>
                                        })}
                                    </select>
                                    <input  disabled = {true} className = "color" type = "color" value = {props.matchingColor[props.choices.indexOf(props.color4)]} />
                                    </div>
                                </div>
                            }</div>}
                            <input type = "submit" />
                    </div>
                </form>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        editMode: state.todoListStyle.editMode,
        styleChoice: state.todoListStyle.styleChoice,
        newColor: state.todoListStyle.newColor,
        color1 : state.todoListStyle.color1,
        color2 : state.todoListStyle.color2,
        color3 : state.todoListStyle.color3,
        color4 : state.todoListStyle.color4,
        choices : state.todoListStyle.choices,
        matchingColor : state.todoListStyle.matchingColor,
    }
}
export default connect(mapStateToProps, { toggleEdit, onChangeHandlerForStyle, addNewStyle })(TodoListStyleForm); 