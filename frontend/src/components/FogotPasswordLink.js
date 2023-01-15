import styled from "styled-components"
import {useState,useEffect,useRef} from "react"

export default function ForgotPasswordLink(){
    const ref=useRef();
    const [value,setValue]=useState(undefined)
return(
    <Container>
        <div><input type="text" />
    <button>Submit</button>
    </div>
    </Container>
    
)

}

const Container=styled.div`

    
`