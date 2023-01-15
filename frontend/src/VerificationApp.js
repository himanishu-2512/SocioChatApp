
import AvatarHome from "./components/avatarhome"
import {Routes,Route, useNavigate} from "react-router-dom"
import Character from "./components/sub-components/charcter"
import Avatar from "./components/sub-components/avatar"
import Chat from "./components/Chat"

import {AiOutlinePoweroff} from "react-icons/ai"
import { useEffect,useState } from "react"
import styled from "styled-components"
import InvalidPage from "./components/page404"
export default function VerificationApp(){
    const Navigate=useNavigate()
    const [isUser,setUser]=useState(false)
    const [isVerified,setVerified]=useState(false);

    const isLogin=async()=>{
        const user=await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
        if(!user){
            setUser(false)
            
            console.log("no");
        }
        else{setUser(true)
            if(user.isVerified===true){
setVerified(true)

            }
            else{
                setVerified(false)
            }
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
{isVerified?(
<Routes>
 
    <Route path="/avatarhome" exact element={<AvatarHome/>}/>
    <Route path="/avatarhome/avatar" element={<Avatar/>}/>
    <Route path="/avatarhome/character" element={<Character/>}/>
    <Route path="/chat" element={<Chat/>}/>
   
    
</Routes>):(<><InvalidPage/></>)}
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
border-radius: 10px;}

}
`

