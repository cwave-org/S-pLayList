import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Question from "../components/Question";
import MusicBar from "./../components/MusicBar";
import Button from "./../components/Button";
import { useNavigate, useLocation } from "react-router-dom";

const TasteTestQue = ({}) => {

    console.log("location 실행 전")
    const location = useLocation();
    const newPageId = location.state.pageId;
    const newScore = location.state.score;

    console.log(newPageId) 
    console.log(newScore) 
    
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [changed, setChanged] = useState(false);

    const onClickTop = (event) => {
        setChanged(true)
        setChecked1(true)
    };
    const onClickBottom = (event) => {
        setChanged(true)
        setChecked2(true)
    };
    const onClickButton = (event) => {
        setChanged(false)
        setChecked1(false)
        setChecked2(false)
    }

    return (
        <>
            <div className="topContent">

            </div>

            <div className="mainContent">
                {changed ? (
                    <>
                        <div className="question">
                            <Question pageId={newPageId} />
                        </div>
                        <div className="que_top" style={{ marginBottom: "20px" }}>
                            <Card pageId={newPageId} pageLoc="top" checked={checked1} /> 
                        </div>
                        <div className="que_bottom" style={{ marginBottom: "20px" }}>
                            <Card pageId={newPageId} pageLoc="bottom" checked={checked2} />
                        </div>
                        <div className="next_button" onClick={onClickButton} style={{ float: "right", marginRight: "40px"}}>
                            <Button size="sm" children="다음" variant="default_fill" pageId={newPageId} score={newScore}></Button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="question">
                            <Question pageId={newPageId} />
                        </div>
                        <div className="que_top" style={{ marginBottom: "20px" }} onClick={onClickTop}>
                            <Card pageId={newPageId} pageLoc="top" checked={checked1} />
                        </div>
                        <div className="que_bottom" style={{ marginBottom: "20px" }} onClick={onClickBottom}>
                            <Card pageId={newPageId} pageLoc="bottom" checked={checked2} />
                        </div>
                    </>
                )}
            </div>

            <div className="bottomContent">
                <MusicBar pagenum={2} />
            </div>
        </>
    )
}

export default TasteTestQue;