
import { useState,useEffect } from "react";
import "./styling/login.css"
import Img from "./styling/work.png"
import Logo from "./styling/Untitled-1.png"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { login} from "../utils/APIRouter";
export default function Login() {

    const navigate=useNavigate()

    const [value, setValue] = useState({
        emailusername: "",
        password: ""
        
    })

    const insta =async(e) => {
        e.preventDefault()
       
            const {emailusername, password} = value;
            const { data } = await axios.post(login, {
        emailusername,
              password,
            });
            console.log(data)
      
            if (data.status === false) {
              toast.error(data.message);
            }
            if (data.status === true) {
                toast.success(data.message,{
                    position:"top-center"})
                    localStorage.setItem(
                        process.env.REACT_APP_LOCALHOST_KEY,
                        JSON.stringify(data.user)
                      );
                     
                     
                        navigate("/avatarhome")
                      
              
              
            
            
        }

}
useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/avatarhome");
    }
  }, []);

    function handleChange(e){
        if(e.target.value!=""){
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



                    <div className="login-body" >
                        <div className="login-form">
                            <div className="company-logo"><img src={Logo} alt="" /></div>
                            <div className="title">Login</div>
                            <div className="form">
                                <form action=""  onSubmit={insta}>
                               

                                    <label htmlFor="emailusername"></label>
                                    <input type="text" name="emailusername" placeholder="Email or Username"  onChange={handleChange} />

                                    <label htmlFor="password"></label>
                                    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                           
                                    <span>New HERE <Link to="/register">Register</Link></span>
                                    <button type="submit">Login</button>
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
