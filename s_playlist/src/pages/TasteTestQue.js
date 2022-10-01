import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Question from "../components/Question";
import MusicBar from "./../components/MusicBar";
import Button from "./../components/Button";
import { useNavigate, useLocation } from "react-router-dom";

const TasteTestQue = ({ pageId, score }) => {
    const location = useLocation();
    pageId = location.state.pageId;
    score = location.state.score;

    const newPageId = pageId+1;
    const newScore = score;
    console.log(newPageId);
    console.log(newScore);
    
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const [changed, setChanged] = useState(false);

   

    const navigate = useNavigate();
    const onClickTop = (event) => {
        setChanged(true)
        setChecked1(true)
    };
    const onClickBottom = (event) => {
        setChanged(true)
        setChecked2(true)
    };

    return (
        <>
            <div className="topContent">

            </div>

            <div className="mainContent">
                {changed ? (
                    <>
                        <div className="question">
                            <Question pageId={pageId} />
                        </div>
                        <div className="que_top" style={{ marginBottom: "20px" }}>
                            <Card pageId={pageId} pageLoc="top" checked={checked1} />
                        </div>
                        <div className="que_bottom" style={{ marginBottom: "20px" }}>
                            <Card pageId={1} pageLoc="bottom" checked={checked2} />
                        </div>
                        <div className="next_button">
                            <Button size="sm" children="다음" variant="default_fill"  pageId={newPageId} score={newScore}></Button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="question">
                            <Question pageId={pageId} />
                        </div>
                        <div className="que_top" style={{ marginBottom: "20px" }} onClick={onClickTop}>
                            <Card pageId={pageId} pageLoc="top" checked={checked1} />
                        </div>
                        <div className="que_bottom" style={{ marginBottom: "20px" }} onClick={onClickBottom}>
                            <Card pageId={1} pageLoc="bottom" checked={checked2} />
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