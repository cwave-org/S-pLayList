import React from "react";
import styled,{css} from "styled-components";

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
    console.log(pagenum)
    if(pagenum==1){

    }
    return(
        <>
            <Box>
                <Bar pagenum={pagenum}/>
                <Bar1 pagenum={pagenum}/>
            </Box>
            <Box align="time">
                <div>04:14</div>
                <div>08:28</div>                
            </Box>
            <Box align="play">
                <PlayImg src='./images/backplay.png' alt='play'/>
                <PlayImg src='./images/play.png' alt='play'/>
                <PlayImg src='./images/afterplay.png' alt='play'/>
            </Box>
        </>
    );
}

export default MusicBar;