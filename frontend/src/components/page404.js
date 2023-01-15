import styled from "styled-components"
import wrong from "./styling/wrong.png"

export default function InvalidPage(){
    return(
        <>
        <Container>
            <div>
                <img src={wrong} alt="Invalid Page"/>
                <p>Invalid Page 
            
                </p>
                <p><span>404</span>Page not found</p>
            </div>
            </Container></>
    )
}
const Container=styled.div`
display:flex;
align-items: center;
justify-content: center;
height:100vh;
width:100vw;

div{
    display:flex;
align-items: center;
justify-content: center; 
flex-direction: column;
}
img{
    height:20vh;
    width:auto;

}
p{
    color:red;
    font-weight:600;
    font-size:25px;
    span{
        margin-right:10px;
        font-weight:bolder;
      font-size:30px;
    }
}

`