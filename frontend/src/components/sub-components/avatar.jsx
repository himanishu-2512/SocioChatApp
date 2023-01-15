import { useRef, useState, useEffect } from "react"
import Userimage from "../styling/user.png"
import styled from "styled-components"
import preloader from "../styling/1487.gif"
import axios from "axios"
import { Buffer } from "buffer"
import { urlsetavatar } from "../../utils/APIRouter"
import { Navigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Avatar() {
    const [isUploaded, setIsUploaded] = useState(undefined)
    const [userImage, setuserImage] = useState(Userimage)
    const inputref = useRef(null)
    const imageref = useRef(null)
    useEffect(() => {

        setImage()
    }, [])

    const setImage = async () => {
        const user = await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
        if (user.isAvatar) {
            setuserImage(user.avatarUrl)
        }
    }

    const submithandler = async () => {
        try {

            const user = await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))

            const image = inputref.current.files[0]
            const form = new FormData()
            form.append("image", image)



            const { data } = await axios.post(`${urlsetavatar}/${user._id}`, form, {
                http: {
                    "Content-Type": "multipart/form-data;"
                }

            })

            if (data.status === true) {
                setuserImage(data.avatarUrl)
                toast.success(data.message)
                setIsUploaded(true)

                localStorage.setItem(process.env.REACT_APP_LOCALHOST_KEY, JSON.stringify({ ...user, avatarUrl: data.avatarUrl, isAvatar: true }))
            }
            if (data.status === false) {
                toast.error(data.message)
            }







        } catch (error) {
            console.log(error)
        }
    }




    const addhandler = async () => {

        inputref.current.click()
        console.log(inputref.current)


    }
    const imagepreviewer = () => {
        setIsUploaded(false);
        imageref.current.src = window.URL.createObjectURL(inputref.current.files[0])

    }
    return (
        <>
            <Container>
                <div>
                    <label htmlFor="imagepreview"></label>
                    {isUploaded === false ? (
                        <div className="image-container">
                            <img src={preloader} alt="" id="preloader" />
                            <img src={userImage} alt="" id="loadingimage" name="imagepreview" ref={imageref} />
                        </div>
                    ) : (<div className="image-container">

                        <img src={userImage} alt="" name="imagepreview" ref={imageref} />
                    </div>)}

                    <label htmlFor="imageupload"></label>
                    <input type="file" ref={inputref} onChange={imagepreviewer} name="imageupload" />
                    <button onClick={addhandler}>Add Image</button>
                    <button onClick={submithandler} id="submitbtn">upload Image</button>




                    <ToastContainer autoClose={5000} position="top-center" closeOnClick pauseOnHover draggable width={"700px"} />
                </div>

            </Container>
        </>

    )
}

const Container = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap:wrap;
    background-color:white;
    #submitbtn:active{
background-color:red;
    }
    .image-container{
        width:fit-content;
        height:auto;
        margin-bottom:100px;
    }
    div{
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap:wrap;
    }
    button{
        width:fit-content;
        padding:20px;
        height:auto;
        background-color: #325cfd;
        
    }
    #loading-image{
        opacity:0.7;
    }
    .image-container{
        position: relative;
        img{
            position:absolute;
        }
        #preloader{
            z-index:2;
            width:50px;
            border:0px;
            height:auto;
        }
    }
    input{
        display:none;
    }
    img{
        height:200px;
        width:200px;
        border-radius: 50%;
        border:solid #325cfd;
        border-width:7px 5px 5px 2px;
        padding:-5px;
        
    }
    @media only screen  and (max-height:600px){
        min-height:600px;
    }
`