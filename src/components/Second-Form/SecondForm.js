import { SecondStyledForm } from "../styledComps";
import { useReducer, useEffect, useState} from "react";
import { initialState, reducer } from "./reducers/form.reducer";
import { change,submit,reset } from "./actions/form.actions";
import { Card, CardText } from "reactstrap";
import { schema } from "./schema";


const url = "data:image/png;base64,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";
export default function SecondForm(props) {
    const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <SecondStyledForm>
            <h3>Tall Oaks Club</h3>
            {!state.firstPage ? //!change
            
            <div id="container">
                <form onSubmit={(e)=> dispatch(submit(e))}>
                    <div id="firstColumn">
                        <div className="wrapper">
                            <div id="fname">
                                <label htmlFor="fname">First Name: </label>
                                <input onChange={(e)=>dispatch(change(e))} type="text" id="fname" name="fname" placeholder="jacob" value = {state.fname} />
                            </div>
                            <div id="lname">
                                <label htmlFor="lname">Last Name: </label>
                                <input onChange={(e)=>dispatch(change(e))} type="text" id="lname" name="lname" placeholder="lang" value = {state.lname}/>
                            </div>
                            <div id="lname" >
                                <label htmlFor="email">Email</label>
                                <input onChange={(e)=>dispatch(change(e))} type="email" id="email" name="email" placeholder="email@email.com" value = {state.email} />
                            </div>
                            <div className="radio">
                                <label htmlFor="favColor">Date:</label>
                                <input onChange={(e)=>dispatch(change(e))} type="date" value = {state.date} name = "date" id = "date"/>
                            </div>
                            <div id="toSub">
                                <input type="submit"/>
                            </div>
                        </div>
                    </div>
                    <div id="secondColumn">
                        <div className="wrapper">
                            <img style={{ width: "100px" }} src={url} />
                        </div>
                    </div>
                </form>
            </div> :
            <Card id = "lastCard">
                <img onClick = {()=> dispatch(reset())} style = {{width : "15px"}} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZSP1d2yFf7FiNcovwEvIzU0eAiQ3WjMfhGBkuVF3VrXqAXUQKBUpQ-6ypc9ij1JHD8o&usqp=CAU"/>
                <CardText>
                We will be in touch soon!
                </CardText>
            </Card>
        }
        </SecondStyledForm>
    )
}




