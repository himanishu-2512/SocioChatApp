import styled from "styled-components"
import { useState } from "react";
export default function ChatUser(props){
//    const {username,imageurl,message,date,time} ={...props}
const [isStyle,setStyle]=useState(false)

    return(
        <>
        <ChatContainers >
            <div>
<div className="image">
    <img src={"https://images.unsplash.com/photo-1659334882289-7f4ef9234976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="" />
</div>
<div className="info-message">
    <div className="name">Himanshu Singh</div>
    <div className="message">Hi henu What are you..</div>
</div>
<div className="date-time">
    <div className="time">08:30</div>
    <div className="date">12/05/2022</div>
</div>

            </div>
        </ChatContainers>
        </>
    )
}
const ChatContainers=styled.div`
position:relative;
    display:flex;
    width:25vw;
    height:100px;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: #d2dbfe;
    margin:2px 0px;
   div{
    
    display:flex;
    height:fit-content;
    justify-content: center;
    align-items:center;
    
   }
    
   .image{ 
position:absolute;
left:2%;
    margin-right:5px;
    img{
        width:50px;
        height:50px;
        border-radius:50%;
    }}
    .info-message{
        display:flex;
        justify-content:center;
        align-items:flex-start;
        flex-direction: column;
        position: absolute;
        left:calc(3% + 50px);
        .name{
            font-weight:bold;
        }
    }
    .date-time{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        right:2%;
        position:absolute;

    }
`