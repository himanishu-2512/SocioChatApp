import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import Image from "./styling/avtarlight.png"
import { useState, useEffect } from "react"
import Images from "./styling/avatarlightpotrait.png"
import axios from "axios"
import { urlverification } from "../utils/APIRouter"
export default function AvatarHome() {
    const Navigate=useNavigate()
    const [Media, SetMedia] = useState(Image)
    const[verified,setIsVerified]=useState(false)
    window.addEventListener("resize", () => {
        SetMedia(window.innerWidth > 500 ? Image : Images)
    })

    
    
    
    useEffect(() => {
        SetMedia(window.innerWidth > 500 ? Image : Images)
      
        
    })
    return (
        <AvatarContainer>
            <img src={Media} alt="" />


            <div className="title">Choose Your Profile-Picture Method</div>
            <button id="character"><Link to="/avatarhome/character">Auto-generated Character</Link></button>
            <div><h3>'OR'</h3></div>
            <button id="avatar"><Link to="/avatarhome/avatar">Custom Pofile Picture</Link></button>


        </AvatarContainer>
    )
}
const AvatarContainer = styled.div`
background-image:url("./styling/avatarpage.png");

    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
   flex-wrap:wrap;
    flex-direction:column;
    

    div h3{
        // color:#325cfd;
        font-weight:bolder;
        font-size:20px;
        width:fit-content;
        margin:0px auto;
    }
img{
//  filter:blur(1px);
    position:absolute;
    width:80vw;
    opacity:0.4;
    z-index:-1;
}
    button{
        width:fit-content;
        min-height:fit-content;
        border:0px solid;
        display:flex;
        justify-content:center;
        align-items:center;
       flex-wrap:wrap;
        
        &:hover{
            transform:scale(1.05);
            transition-duration:0.2s;
        }
   
        
a{
    width:fit-content;
        min-height:fit-content;
        color:white;
        text-decoration:none;
        padding:10px;
       
        background-image: linear-gradient(-215deg,#325CFD,rgb(69, 105, 249));
        border-radius:10px;
       
    }
            
        }
       
  @media only screen and (max-width:600px){
    img{
        width:480px
    }
   
  }
  @media only screen and (max-width:500px){
    img{
        height:90vh;
        width:auto;
    }
   
    
  }

  @media only screen and (max-width:350px){
   .title{
        font-size:18px;
    }
    *{
        transform:scale(0.8);
    }
  }
`
