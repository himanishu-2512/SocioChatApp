import styled from "styled-components"
import axios from "axios"
import { useParams } from "react-router-dom"
import {urlverification} from "../utils/APIRouter"
import { useState } from "react"
export default function ForgotPassword(){
    const [values,setValues]=useState([{
        password:"",
        confirmpassword:""
    }])
    
    const params=useParams()
    const submit=async(e)=>{
        e.preventDefault()
    
const password=values.password;

const user=await axios.post(`${urlverification}/${params.id}/forgotpassword/${params.token}`,{
    password
})
console.log(user)



    }
    const handleChange=async(e)=>{
        if(e.target.value!==""){
            e.target.style.color="blue"
            e.target.style.backgroundColor="white"
        }
        else{
            e.target.style.backgroundColor="#92a5f3"
            e.target.style.color="#11267c"
        }
        
        setValues({...values,
            [e.target.name]:e.target.value,
        })
    
    }
    return(
        <Container>
            <div>
                <h1>Enter your new password</h1>
                <form action="">
                    <input  type="password" placeholder="password" name="password" onChange={handleChange}/>
                    <input  type="password" placeholder="confirm password" name="coniformpassword" onChange={handleChange}/>
                    <button type="submit" onSubmit={submit}>Submit</button>
                </form>
            </div>
        </Container>

    )
}
const Container=styled.div`
display:flex;
align-items:center;
justify-content: center;
width:100vw;
height:100vh;
form {
    button{
        background-color: blue;
    
    }
}


`