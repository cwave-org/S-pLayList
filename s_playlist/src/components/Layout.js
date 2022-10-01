import React from "react";
import styled from "styled-components";
const Title=styled.div`
    background: linear-gradient(to right top, #c9a9b3, #a110e4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-style: italic;
    text-align: center;
    margin: 5% auto 0;
    font-weight: bold;
    text-align: center;
    font-size: 40px;
    /* width: fit-content; */
    /* margin-bottom:5%; */
`;
const IUback=styled.div`
    text-align: center;
    z-index: 3;
    margin: -30% auto 0;
    /* margin-top: -30%; */
    position: fixed;
    width: 100%;
    background-color: #F1F1F3;
`
const Container=styled.div`
    margin-bottom: 10%;
`;
const Layout=(props)=>{
    return(
        <Container>     
            <IUback>
                <Title>IU Pallete</Title>
            </IUback>       
            <main style={{marginTop:"30%"}}>
                {props.children}
            </main>
        </Container>
        );
    }

export default Layout;