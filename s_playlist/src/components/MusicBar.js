import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Container=styled.div`
    background-color: #F1F1F3;
    padding-top: 10px;
    position: fixed;
    bottom: 0;
    width: 95%;
    margin: 0 auto;
`;
const Bar = styled.div`
    background-color: #1447ff;
    width: ${(props)=> (props.pagenum)*25}%;
    height: 7px;
`;
const Bar1 =styled(Bar)`
    background-color:#808080;
    width: ${(props)=> (4-props.pagenum)*25}%;
`;
const Box =styled.div`
    display: flex;
    justify-content: ${props=>{
        if (props.align=="time"){
            return "space-between"
        } else if(props.align=="play"){
            return "space-around"
        }else{
            return "center"
        }
     }};
`
const PlayImg=styled.img`
    margin: 3px auto;
`;

const MusicBar=({pagenum, currenttime})=>{
    const navi=useNavigate();
    const onClickNext=()=>{
        if(pagenum+1<5){
            navi(`/${pagenum+1}`);
        }else{
            navi('/1');
        }
    }
    const onClickPrev=()=>{
        if(pagenum-1>0){
            navi(`/${pagenum-1}`);        
        }else{
            navi('/4');        
        }
    }
    return(
        <Container>
            <Box>
                <Bar pagenum={pagenum}/>
                <Bar1 pagenum={pagenum}/>
            </Box>
            <Box align="time">
                <div>{currenttime}</div>
                <div>05:16</div>                
            </Box>
            <Box align="play">
                <PlayImg onClick={onClickPrev} style={{marginRight:'5px'}} src='./images/backplay.png' alt='play'/>
                <PlayImg src='./images/play.png' alt='play'/>
                <PlayImg onClick={onClickNext} style={{marginLeft:'5px'}} src='./images/afterplay.png' alt='play'/>
            </Box>
        </Container>
    );
}

export default MusicBar;