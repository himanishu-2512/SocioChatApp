import styled from "styled-components";
import { useState } from "react";
import "./styling/register.css"
import Img from "./styling/work.png"
import Logo from "./styling/Untitled-1.png"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios"

import { Host } from "../utils/APIRouter";
export default function Register() {

    const navigate=useNavigate()

    const [value, setValue] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword:"",
    })

    const insta =async(e) => {
        e.preventDefault()
        if(Validation()){
            const {name, email, username, password,confirmpassword } = value;
            const { data } = await axios.post(Host, {
                name,
              username,
              email,
              password,
            });
      
            if (data.status === false) {
              toast.error(data.msg);
            }
            if (data.status === true) {
                
             
              toast.success("Registered! sucessful",{
                position:"top-center"
            })
            toast.success("A Verification Link has been Sent to your registered email",{
                position:"top-center"
            })
            }
        }

}
    
    function Validation() {
        const { name, username, email, password, confirmpassword } = { ...value };
        if(name.length<3){
            console.log(name.length)
            toast.error("Name should have atleast 3 characters")
        }
        else if(username.length<5){
            console.log(username.length)
           toast.error("Username should atleast 5 characters")
        }
        else if(email.length<3){
            toast.error("Enter a valid email")
        }
        else if(password.length<8){
            toast.error("Password should have atleast 8 characters")
        }
        else if (confirmpassword !== password) {
            console.log(confirmpassword===password)
             toast.error("Password and Coniform Password should be same" )   }
        else{
           
                return true;
             }
        return false;
        
    }
    function handleChange(e){
      
        if(e.target.value!==""){
            e.target.style.color="blue"
            e.target.style.backgroundColor="white"
        }
        else{
            e.target.style.backgroundColor="#92a5f3"
            e.target.style.color="#11267c"
        }
        
        setValue({...value,
            [e.target.name]:e.target.value,
        })
    }
const position=window.innerWidth>340?"bottom-left":"top-right"

    return (
        <>
            <div className="main-container">
                <div className="img-container">
                    <img src={Img} alt="" />
                </div>
                <div className="form-container">



                    <div className="register-body" >
                        <div className="register-form">
                            <div className="company-logo"><img src={Logo} alt="" /></div>
                            <div className="title">Register</div>
                            <div className="form">
                                <form action=""  onSubmit={insta}><label htmlFor="name"></label>
                                    <input type="text" name="name" placeholder="Name" onChange={handleChange}/><label htmlFor="username"></label>
                                    <input type="text" name="username" placeholder="User Name" onChange={handleChange} />

                                    <label htmlFor="email"></label>
                                    <input type="email" name="email" placeholder="Email"  onChange={handleChange} />

                                    <label htmlFor="password"></label>
                                    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                                    <label htmlFor="confirmpassword"></label>
                                    <input type="password" name="confirmpassword" placeholder="Confirm Password" onChange={handleChange} />
                                    <span>Already Have an account <Link to="/login">Login</Link></span>
                                    <button type="submit">Register</button>
                                </form>
                               
                                <ToastContainer autoClose={5000} position={position} closeOnClick pauseOnHover draggable />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )


}
