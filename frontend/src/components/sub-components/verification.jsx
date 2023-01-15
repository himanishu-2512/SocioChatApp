import styled from "styled-components"
import { Link,useParams ,useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import  {urlverification}  from "../../utils/APIRouter"
import right from "../styling/right.png"
import wrong from "../styling/wrong.png"

export default function Verification(){
    const navigate=useNavigate()
    const params=useParams()
    const [result,setResult]=useState(false)

    const navigation=()=>{
navigate("/login")
    }
    const send=async()=>{
        try {
            const result=await axios.post(`${urlverification}/${params.id}/verify/${params.token}`)
            if(result.data.status==true){
             setResult(true)
localStorage.setItem(process.env.REACT_APP_LOCALHOST_KEY,JSON.stringify(result.data.update))
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{

        console.log(params,urlverification)
        send()
    })
    return(
        <>
        <Container>
            <div>
        {result?(<>
            <img src={right} alt="Correct" />
            <button onClick={navigation}>Login</button></>
        ):(<><img src={wrong} alt="Wrong" />
        <div>Link is wrong or Link expired!!</div>
        <button id="login" onClick={navigation}>Re-Login</button></>)}
       
</div>
        </Container>
        </>
    )
}

const Container=styled.div`
    display:flex;
height:100vh;
width:100vw;
justify-content: center;
align-items: center;
flex-direction: column;
div{
    display:flex;

justify-content: center;
align-items: center;
flex-direction: column;
}
img{
    height:20vh;
    width:auto;
}
button{
    margin-top:50px;
    background-color:#4bb543;
    &:hover{
        transform:scale(1.1);

    }
    &:active{
        background-color: green;
    }
}
#login{
    background-color: #9d1717;
}

`