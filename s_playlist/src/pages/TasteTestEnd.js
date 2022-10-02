import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MusicBar from './../components/MusicBar';

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
                <div>
                    {newScore} / 10 <br></br>
                    객관적인 데이터! <br></br>
                    이지은님도 몰랐던 이지은님의 취향을 맞춰볼까? <br></br>
                </div>
            </div>
        <div>
            <div className="mainButton">
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