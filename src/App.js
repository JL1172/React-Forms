import axios from "axios";
import Home from "./components/Home";
import {Routes,Route,Link} from "react-router-dom"; 
import FirstForm from "./components/First-Form/FirstForm";
import {StyledHeader} from "./components/styledComps";
import {useState} from "react"; 
import { useVisible } from "./components/mainHooks/useVisible";
import SecondForm from "./components/Second-Form/SecondForm";
import App1 from "./rootFiles/App";


const initial = false;
export default function App() {
  const [visible,setVisible] = useVisible("visible",initial)
  return (
    <div>
      <StyledHeader>
      <Link to = "/"> <img src = "https://img.icons8.com/?size=512&id=i6fZC6wuprSu&format=png"/> Comprehensive Repo of Forms</Link>
      </StyledHeader>
      <Routes>
        <Route path = "/" 
        element = {<Home visible = {visible} setVisible = {setVisible} />}/>
        <Route path = "form-1/*" element = {<FirstForm />} />
        <Route path = "form-2/*" element = {<SecondForm/>} />
        <Route path = "app-3/*" element = {<App1/>} />
      </Routes>
    </div>
  )
}
