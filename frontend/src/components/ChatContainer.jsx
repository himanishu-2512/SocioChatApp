import styled from "styled-components"
export default function ChatContainer(){
    return(
        <Container>
            <div>
                <div className="bar">
                    <div className="img"><img src={"https://images.unsplash.com/photo-1659334882289-7f4ef9234976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="" /></div>
                    <div className="name">Himanshu Singh</div>
                </div>
                <div className="chat"></div>
                <div className="input-section">
                    <input type="text" />
                </div>
            </div>
        </Container>

    )
}

const Container=styled.div`
display:flex;
width:70vw;
height:100vh;
position:relative;
.bar{
    width:70vw;
    height:80px;
    position:absolute;
    top:0;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    background-color: #203585;
   
    img{
        margin-left:1vw;
        width:60px;
        height:60px;
        border-radius: 50%;
        margin-right:10px;


    }
    .name{
        font-weight:bold;
        color:white;
        font-size: 18px;
    }


}
.input-section{
    bottom:0;
    position: absolute;
}

    
`

