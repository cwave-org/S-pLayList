import React from "react";
import styled from "styled-components";
const Title=styled.div`
    background: linear-gradient(to right top, #c9a9b3, #a110e4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-style: italic;
    text-align: center;
    margin: 0 auto;
    margin-top:5%;
    font-weight: bold;
    font-size: 50px;
    width: fit-content;
    /* margin-bottom:5%; */
`;
const IUback=styled.div`
    text-align: center;
    /* margin: -25% auto 0; */
    margin-top: -25%;
    position: fixed;
    width: auto;
    width: 100%;
    background-color: #F1F1F3;

`
const IU=()=>{

    return(
        <IUback>
            <img src="./images/Palette.png"/>
            {/* <Title>IU Pallete</Title> */}
        </IUback>
    )
}

export default IU;