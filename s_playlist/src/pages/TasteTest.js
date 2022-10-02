import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MusicBar from './../components/MusicBar';
import Layout from './../components/Layout';
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
    font-size: var(--button-font-size, 1rem);
    font-weight: bold;
    justify-content: center;
    text-align: center;
    item-align: center;
    vertical-align: middle;
`

const TasteTest=()=>{
    const pageId=0;
    const score=0;

    return(
        <>
        <div className="topContent">
            <Layout />
        </div>
        
        <Box>
        <div className="mainContent" style={{ verticalAlign: "middle" }}>
            <div className="mainimg" style={{ alignContent : "center" }}>
                <img src = "./images/TasteTest.png" width="100%"></img>
            </div>
            <div className="mainText">
                <div style={{ textAlign: "center", marginBottom: "10%", marginTop: "10%"}}>
                    카드 사용 내역을 기반으로 하는 <br></br>
                    객관적인 테스트! <br></br>
                    이지은님도 몰랐던 이지은님의 취향을 맞춰볼까? <br></br>
                </div>
            </div>
        <div>
            <div className="mainButton" style={{ textAlign:"center", margin: "0 auto" }}>
                <Button size="sm" children="시작하기" variant="default_fill" pageId={pageId} score={score}></Button>
            </div>
        </div>
        </div>
        </Box>

        <div className="bottomContent">
            <MusicBar pagenum={2} />
        </div>
        </>
    )
}

export default TasteTest;