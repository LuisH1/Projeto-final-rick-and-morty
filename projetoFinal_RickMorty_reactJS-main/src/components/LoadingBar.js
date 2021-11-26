
import React from 'react';
import { useState } from 'react/cjs/react.development';
import styled, {keyframes} from 'styled-components';


function LoadingBar(props){






const keyLine = keyframes`


0%{
    border-width: 2px solid #39FF14;
    width: 1%;
    transition: all 0.5s ease-out
}



100%{
    border-width: 2px solid #39FF14;
    width: 90%;
   
}

`


const keyLine2 = keyframes`
0%{
    border: 2px solid #D705F2;
    width: 1%;
    transition: all 0.5s ease-out
}


100%{
    border: 2px solid #D705F2;
    width: 90%;
    box-shadow: 0px 0px 35px #D705F2, 0px 0px 15px #D705F2 inset;
  
}


`
const Hr = styled.hr`
    width: 100%;
    margin-top: 5px;
    animation-name: ${keyLine};
    animation-duration: ${props.time+'s' ? props.time+'s': 1};
    animation-timing-function: ease-in;
    border: 2px solid #39FF14;
    box-shadow: 0px 0px 35px #74E452, 0px 0px 15px  inset;

 
    

`


const HrPurple = styled.hr`
   width: 100%;
   
    animation-name: ${keyLine};
    animation-duration: ${props.time+'s' ? props.time+'s': 1};
    animation-timing-function: ease-in;
    border: 2px solid #D705F2;
    box-shadow: 0px 0px 35px #D705F2, 0px 0px 15px  inset;

 

`


    
    return(
            <>
        <Hr></Hr>
        <HrPurple></HrPurple>
            </>
    )


}

export default LoadingBar