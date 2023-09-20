import { StyledForm } from "../styledComps"
import { useForm } from "./ffhooks/useForm"
import Reactstrap, { CardText,Card, CardBody, CardTitle, Form, FormGroup, Input, Label, Alert, Placeholder } from "reactstrap";
import { useEffect, useState } from "react";
import { useFirst } from "./ffhooks/useFirst";
import { states } from "./fifteyState";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { schema } from "./schema";
import * as yup from 'yup';

const initialValue = {
    fname: "",
    lname: "",
    email: "",
    state: "",
    username: "",
    password: "",
}

const initialPageData = {
    firstPage: true,
    secondPage: false,
    thirdPage: false,
    fourthPage: false,
}

export default function FirstForm(props) {
    const [pageData, setPageData, changePageBack, changePageToLast,
        changePageToSecond, completeForm, reset] = useFirst("First", initialPageData);
    const [data, change, submit, afterData, error,resetFully] = useForm("Form-1", initialValue, completeForm, reset);
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        schema.isValid(data).then(valid => setDisabled(!valid))
    }, [data])


    return (
        <StyledForm first={pageData.firstPage} second={pageData.secondPage} third={pageData.thirdPage}>
            <main>
              
                    <span onClick={reset}><img style = {{width : "20px",mixBlendMode : "color-burn"}} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZSP1d2yFf7FiNcovwEvIzU0eAiQ3WjMfhGBkuVF3VrXqAXUQKBUpQ-6ypc9ij1JHD8o&usqp=CAU"/></span>
                <h3>Registration Form</h3>
                <div>
                    <section>Info</section>
                    <Placeholder
                            color= {pageData.secondPage || pageData.thirdPage? "" : "light"}
                        size = "xs"
                        xs={12}
                        style = {{height : "10px",width : "100px", marginTop : "1.5rem",color : "royalblue", transition : ".5s"}}
                    />
                    <section>Contact</section>
                    <Placeholder
                        color= {pageData.thirdPage ? "" : "light"}
                        size = "xs"
                        xs={12}
                        style = {{height : "10px",width : "100px", marginTop : "1.5rem",color : "royalblue",transition : ".5s"}}
                    />
                    <section>Profile</section>

                </div>
                <Form onSubmit={submit}>
                    {pageData.firstPage && <div>
                        <FormGroup floating>
                            <Input type="text" placeholder="first name" id="fname" name="fname" value={data.fname} onChange={change} />
                            <Label htmlFor="fname">First Name</Label>
                        </FormGroup>
                        {error.fname && <p color="danger" style={{ color: "red", }}>*{error.fname}</p>}
                        <FormGroup floating>
                            <Input type="text" placeholder="last name" id="lname" name="lname" value={data.lname} onChange={change} />
                            <Label htmlFor="lname">Last Name</Label>
                        </FormGroup>
                        {error.lname && <p color="danger" style={{ color: "red" }}>*{error.lname}</p>}
                        <div id="firstPageButton">
                            <button onClick={setPageData}>Next</button>
                        </div>
                    </div>}
                    {pageData.secondPage &&
                        <div>
                            <Routes>
                                <Route path="contact" element={
                                    <div>
                                        <FormGroup floating>
                                            <Input type="email" placeholder="email@email.com" id="email" name="email" value={data.email} onChange={change} />
                                            <Label htmlFor="email">Email</Label>
                                        </FormGroup>
                                        {error.email && <p color="danger" style={{ color: "red" }}>*{error.email}</p>}
                                        <FormGroup row>
                                            <Input name="state" onChange={change} value={data.state} id="state" type="select">
                                                <option value="">Select State</option>
                                                {states.map((n, i) => {
                                                    return <option key={i} value={n}>{n}</option>
                                                })}
                                            </Input>
                                        </FormGroup>
                                        {error.state && <p color="danger" style={{ color: "red" }}>*{error.state}</p>}</div>
                                } />
                            </Routes>
                            <div id="secondPageButtons">
                                <button onClick={changePageBack}>Back</button>
                                <button onClick={changePageToLast}>Next</button>
                            </div>
                        </div>
                    }
                    {pageData.thirdPage &&
                        <Routes>
                            <Route path="profile" element={<div>
                                <FormGroup floating>
                                    <Input type="text" value={data.username} onChange={change} id="username" name="username" placeholder="username" />
                                    <Label htmlFor="username">Username</Label>
                                </FormGroup>
                                {error.username && <p color="danger" style={{ color: "red" }}>*{error.username}</p>}
                                <FormGroup floating>
                                    <Input type="password" value={data.password} onChange={change} id="password" name="password" placeholder="password" />
                                    <Label htmlFor="password">password</Label>
                                </FormGroup>
                                {error.password && <p color="danger" style={{ color: "red" }}>*{error.password}</p>}
                                <div id="thirdPageButtons">
                                    <button onClick={changePageToSecond}>Back</button>
                                    <input disabled={disabled} type="submit" id="submit" />
                                </div>
                            </div>} />
                        </Routes>}
                </Form>
                {pageData.fourthPage &&
                    <div id = "container">
                        {afterData.map((n, i) => {
                            return <div id="fourth">
                                <div key={i * Math.random()* 112344}><span className="span">Username :</span> {n.username}</div>
                                <div key={i * Math.random()* 112344}><span className="span">Password :</span> {n.password}</div>
                                <div key={i * Math.random()* 112344}><span className="span">First Name :</span> {n.fname}</div>
                                <div key={i * Math.random()* 112344}><span className="span">Email :</span> {n.email}</div>
                                <div key={i * Math.random()* 112344}><span className="span">State :</span> {n.state}</div>
                            </div>
                        })}
                        <button className="reset" onClick={resetFully}>Reset</button>
                                <Card id = "card">
                                    <CardTitle>About This Form</CardTitle>
                                    <CardBody>
                                        Thanks {afterData[0].fname} for using this form! This form practices data persistence, with localStorage, custom hooks, reactstrap, styled-components, axios for the post
                                            request (for displaying this user info), yup for the form validation, and react router for navigating. Hope you enjoyed.
                                    </CardBody>
                                </Card>
                        </div>}
            </main>
        </StyledForm>
    )
}