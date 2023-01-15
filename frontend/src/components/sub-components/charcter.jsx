import styled from "styled-components"
import axios from "axios"
import { Buffer } from "buffer"
import { useState, useEffect } from "react"
import GIF from "../styling/1486.gif"
import { urlsetcharacter } from "../../utils/APIRouter"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Character() {
    
    const [image, setImage] = useState([])
    const [selected, setSelected] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true);







    const characterGenerator = async () => {
        setIsLoading(true)
        setSelected(undefined)
        try {
            const images = []
            const api = "https://api.multiavatar.com"
            for (var i = 0; i < 4; i++) {
                // const imageurl = await axios.get(`${api}/${Math.round(Math.random() * 1000)}?apikey=aN18zUZicXxTlv`)
                const imageurl = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`)
console.log(imageurl)

                const buffer = new Buffer(imageurl.data)

                images.push(buffer.toString("base64"))
            }
            setImage(images)
            console.log(await image)
            setIsLoading(false);
        } catch (error) {

            const images = []
            const api = "https://api.multiavatar.com"
            for (var i = 0; i < 4; i++) {
                // const imageurl = await axios.get(`${api}/${Math.round(Math.random() * 1000)}?apikey=7T8pbCeUtuvwBN`)
                const imageurl = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`)


                const buffer = new Buffer(imageurl.data)

                images.push(buffer.toString("base64"))
            }
            setImage(images)
            console.log(await image)
            setIsLoading(false);
        }

    }
    const updateAvatar = async() => {
if(selected===undefined){
    toast.error("Please select avatar");
}
else{

var user=await JSON.parse(localStorage.getItem("chat-app-current-user"))
const {data}=await axios.post(`${urlsetcharacter}/${user._id}`,{
    
avatarUrl:`data:image/svg+xml;base64,${image[selected]}`,
})
console.log(data)
if(data.status===true){
    console.log("yes")
    user.isAvatar=true;
    user.avatarUrl=`data:image/svg+xml;base64,${image[selected]}`;
    localStorage.setItem("chat-app-current-user",JSON.stringify(user))
    toast.success(data.message)
}
}

    }
    useEffect(() => {
        characterGenerator();
    }, [])
    const handleavatar = (e, index) => {
        
      
        setSelected(index)
    }
  



    return (<>
        {isLoading ? (<Characters>
            <img src={GIF} className="image" alt="" />
            <ToastContainer autoClose={5000} position="top-center" closeOnClick pauseOnHover draggable />
        </Characters>) : (
            <Characters>
                <div className="container">
                    <div className="title">Pick Your Favourite Character</div>
                    <div className={`avatar-container`}>
                        {
                            image.map((item, index) => {
                                return (
                                    <div className={`avatar ${selected === index ? "selected" : ""}`} key={index} >
                                        <img src={`data:image/svg+xml;base64,${item}`} alt="" onClick={(e) => handleavatar(e, index)} />

                                    </div>)
                            })
                        }
                    </div>
                    <button id="generator" onClick={characterGenerator}>Generate other characters</button>
                    <button id="submit" onClick={updateAvatar}>Submit</button>
                </div>
              
            </Characters>
             )}
             <ToastContainer autoClose={5000} position="top-center" closeOnClick pauseOnHover draggable />
        </>)

}
const Characters = styled.div`
width:100vw;
min-height:100vh;
color:black;
display:flex;
justify-content:center;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
.title{
    text-align: center;
    font-weight:580;
    color:#203aa1;
}
.avatar-container{
    width:100vw;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
img{
    width: 100px;
    height: 100px;
}
#submit{
    background-color: #4bb553;
    color:white;
    padding:10px;
}
 button{
    color:black;
    width:fit-content;
    border:2px solid black;
    padding:10px;
 }
.avatar-container{
    display:flex;
    flex-wrap: wrap;
}
 div div img{
    width:100px;
    height:100px;
    border-radius: 50%;
    margin:5px;
    padding:5px;
   
 }

.container{
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;

}
div {
    .avatar{
    width:150px;
    display: flex;
    justify-content: center;
    align-items: center;
    height:150px;
  

}
.selected img{
    border:5px solid #4bb553;
}}
button{
    border:0px;
}

#generator{
    background-color: #325cfd;
    color:white;
    height:auto;
    display:flex;
    flex-wrap: wrap;
}

   

`