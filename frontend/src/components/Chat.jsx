import { useRef, useState, useEffect } from "react"
import { AiOutlineHome ,AiOutlineMessage} from "react-icons/ai";
import {BsPersonPlus,BsCameraVideo,BsBell} from "react-icons/bs"
import ChatUser from "./sub-components/chatUser";
import ChatContainer from "./ChatContainer"

import styled from "styled-components"

import axios from "axios"
import { Buffer } from "buffer"

import { Navigate,NavLink } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Login from "./login";
export default function Chat(){
     var isActive=false
    return(
        <>
<Container>

<div className="menu">
    <li><img src={"https://images.unsplash.com/photo-1659334882289-7f4ef9234976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="" /></li>
    <li><NavLink to="home" className={({isActive})=>isActive?"active":"inactive"}><AiOutlineHome/></NavLink></li>
    <li><NavLink to="ghar" className={({isActive})=>isActive?"active":"inactive"}><AiOutlineMessage/></NavLink></li>
    <li><NavLink to="user" className={({isActive})=>isActive?"active":"inactive"}><BsPersonPlus/></NavLink></li> 
    <li><NavLink to="video" className={({isActive})=>isActive?"active":""}><BsCameraVideo/></NavLink></li> 
    <li><NavLink to="notification" className={({isActive})=>isActive?"active":""}><BsBell/></NavLink></li>
 
</div>

        <div className="chat-usercontainer">
            <div className="title"><h1>Messages</h1></div>
            <div className="messages-menu">
               
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search Contacts"/>
            </div>
            <div className="user-container">
            <ChatUser props={"props"}/>
            <ChatUser props={"props"}/>
            <ChatUser props={"props"}/>
            <ChatUser props={"props"}/>
            <ChatUser props={"props"}/>
            <ChatUser props={"props"}/>
            <ChatUser props={"props"}/>
            <ChatUser props={"props"}/>
            <ChatUser props={"props"}/>
            <ChatUser props={"props"}/>
            <ChatUser props={"props"}/>   
            </div>
        </div>
        <div className="chat-container">
            <ChatContainer/>
        </div>
</Container>
        
        </>
    )
}
const Container=styled.div`
width:100vw;
height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    .menu{
        width:5vw;
        height:100vh;
        background-color: #325cfd;
        li{
            list-style-type: none;
            width:100%;
            display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        img{
            width:55px;
            height:55px;
            border-radius: 50%;
            margin-bottom:100px;
        }
           .active{
            display: flex;
            
            position: relative;
                background-color: #5d7dfd;
                &::before{
                content:"";
                width:5px;
                height:20px;
                position:absolute;
                background-color: white;
                left:0;
                padding:10px 0px;
              

                
            }
            }
            a{
                color:white;
                text-decoration:none;
                width:100%;
                padding:10px 0px;
                display:flex;
                justify-content: center;
                align-items: center;
                
                svg{
                width:25px;
                height:25px;
           }

           

            }
            &:first-child{
                margin-top:80px;
            }
        }
    }
    .chat-usercontainer{
width:25vw;
height:100vh;
background-color:#f4f2ff;
overflow:scroll;
.title{
    width:100%;
    vertical-align:middle;
}
.user-container{
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:fit-content;
    overflow:scroll;
}

    }
    .chat-container{
        width:70vw;
        background-color: #5d7dfd;
        height:100vh;
    }
   
`