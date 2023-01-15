import Login from "./components/login"
import Register from "./components/register"
import Home from "./components/home"
import VerificationApp from "./VerificationApp"
import {Routes,Route, useNavigate} from "react-router-dom"
import ForgotPassword from "./components/ForgotPassword"
import Verification from "./components/sub-components/verification"
import {AiOutlinePoweroff} from "react-icons/ai";
import { useEffect,useState } from "react"
import styled from "styled-components"
import ForgotPasswordLink from "./components/FogotPasswordLink"
import Chats from "./components/Chats"

export default function App(){
    const Navigate=useNavigate()
    const [isUser,setUser]=useState(false)

    const isLogin=async()=>{
        const user=await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
        if(!user){
            setUser(false)
            console.log("no");
        }
        else{setUser(true)
            console.log("yes");}
        
    }
    const logout=()=>{
        localStorage.removeItem(process.env.REACT_APP_LOCALHOST_KEY);
        Navigate("/login")
    }
    useEffect(()=>{
isLogin()
    })


    return(
        <>
        <Container>
            <div>
        {isUser?(<li><AiOutlinePoweroff onClick={logout}/></li>):("")}

<Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/register"  element={<Register/>}/>
    <Route path="/chats" element={<Chats/>}/>
    <Route path="/users/:id/verify/:token" element={<Verification/>}/>
    <Route path="/users/:id/forgotpassword/:token" element={<ForgotPassword/>}/>
    <Route path="/forgotpassword" element={<ForgotPasswordLink/>}/>
</Routes>

<VerificationApp/>
</div>
</Container>
</>
    )
}
const Container=styled.div`


li{
    svg{
position: absolute;
top:10px;
right:20px;
color:white;
background: red;
z-index:2;
padding:10px;
font-weight: bolder;
border-radius: 10px;
}

}
`