import React from 'react'
import styled, {keyframes} from 'styled-components'

const rodando = keyframes`

0%{
    transform:rotate(0)
}
100%{
    transform: rotate(360deg);
}


`



export const Container = styled.div`

    display:flex;
    flex: column;
    align-items: center;
    
    height:100vh;
    width: 70vw;
    

    align-items: center;
    justify-content: center;
    



`

const Loading = styled.div`


height: 80px;
width: 80px;

border-radius: 50%;
border:8px solid white ;

border-left: 8px solid #39FF14;
box-shadow: 0px 0px 35px #39FF14, 0px 0px 15px #D705F2 inset;

animation-name: ${rodando};
animation-duration: .5s;
animation-iteration-count: infinite;



`





 function LoadingComponent(){


    return(
        
        <Container>
            <Loading>
           
            </Loading>
        </Container>

        )
}

export default LoadingComponent