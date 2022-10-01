import React, { useState } from "react";
import styled,{css} from "styled-components";
import { useNavigate } from 'react-router-dom';

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
    const [nextnum,setNextnum]=useState(0);
    const [prevnum,setPrevnum]=useState(0);
    // if (pagenum==1){
    //     setNextnum(2);
    //     setPrevnum(4);
    // }else if(pagenum==2){
    //     setNextnum(3);
    //     setPrevnum(1);
    // }else if(pagenum==3){
    //     setNextnum(4);
    //     setPrevnum(2);
    // }else{
    //     setNextnum(1);
    //     setPrevnum(3);
    // }
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
        <>
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
        </>
    );
}

export default MusicBar;