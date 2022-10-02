import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MusicBar from './../components/MusicBar';
import styled, {css} from "styled-components";

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap');
</style>

const Box =styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    cursor: pointer;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: var(--button-font-size, 1.3rem);
    font-weight: bold;
    justify-content: center;
    text-align: cneter;
    margin-bottom: 10%;
`

const TasteTestEnd=()=>{
    const pageId=0;
    const score=0;

    const location = useLocation();
    const newScore = location.state.score;

    return(
        <>
        <div className="topContent">

        </div>
        
        <div className="mainContent">
            <div className="mainimg" style={{alignContent : "center"}}>
                <img src = "./images/TasteTestTitle.png" width="100%"></img>
            </div>
            <div className="mainText">
                <Box>
                <div style={{textAlign:"center"}}>
                    <h1 style={{ textAlign:"center", fontSize:"75px", marginTop: "0px", marginBottom: "20px", background: "linear-gradient(to bottom, #F65166, #8738F1)", color: "transparent", WebkitBackgroundClip: "text"}}>{newScore*20}/100 </h1>
                    당신은 이지은퀴즈 상위 30%입니다. <br></br>
                </div>
                </Box>
            </div>
        <div>
            <div className="mainButton" style={{ textAlign:"center", margin: "0 auto" }}>
                <Button size="sm" children="재도전하기" variant="default_fill" pageId={pageId} score={score}></Button>
            </div>
        </div>
        </div>

        <div className="bottomContent">
            <MusicBar pagenum={2} />
        </div>
        </>
    )
}

export default TasteTestEnd;