import React from "react";
import styled, { css } from "styled-components";
import PlayOrPause from "./PlayOrPause";

const Box = styled.div`
    display: flex;
    flex-direction: row; 
    height: 50%;
    width: 70%;
    justify-content: center;
    border: 1px solid #828282;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0 auto;
    justify-content: center;
`

const CheckedBox = styled.div`
    display: flex;
    flex-direction: row; 
    height: 50%;
    width: 70%;
    justify-content: center;
    border: 1px solid #99ADF8;
    background-color: #99ADF8;
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0 auto;
    justify-content: center;
`

const LeftBox = styled.div`
    flex: 1;
    justify-content: center;
`
const RightBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column; 
    height: 50%;
    justify-content: center;
`
const TitleBox = styled.div`
    display: flex;
    border: 1.5px solid #828282;
    padding: 6px 6px;
    border-radius: 20px;
    font-size: 1rem;
    line-height: 1;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

const CheckedTitleBox = styled.div`
    display: flex;
    border: 1.5px solid white;
    padding: 6px 6px;
    border-radius: 20px;
    font-size: 1rem;
    line-height: 1;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

const ContentBox = styled.div`
    display: flex;
    flex-direcation: row;
    justify-content: center;
    margin-top: 30px;
`

const CheckedContentBox = styled.div`
    display: flex;
    flex-direcation: row;
    justify-content: center;
    margin-top: 30px;
    color: white;
`

const Card = ({ pageId, pageLoc, checked }) => {

    var arrId = -1;
    var arrQuestion = new Array(
        "버거킹",
        "롯데리아",
        "스타벅스",
        "할리스커피",
        "야구",
        "축구",
        "떡볶이",
        "마라탕",
        "오프라인 쇼핑",
        "온라인 쇼핑"
    ); //배열선언

    var arrHeart = new Array(
        2200, 1923, 1234, 929, 1232, 1938, 4732, 8302, 10002, 9981 
    );

    var arrAnswer = new Array(0,1,1,0,1,0,0,1,0,1); //1이 정담, 0이 오답
    
    if (pageLoc == "top") {
        arrId = pageId * 2 - 2;
    }
    else if (pageLoc == "bottom") {
        arrId = pageId * 2 - 1;
    }

    const imgsrc = "./images/" + arrQuestion[arrId] + ".png";

    return (
        <>
            {checked ? (
                <>
                    <CheckedBox>
                        <LeftBox>
                            <img src={imgsrc} width="95%" height="95%" alt='corporate' />
                        </LeftBox>
                        <RightBox>
                            <CheckedTitleBox>
                                {arrQuestion[arrId]}
                            </CheckedTitleBox>
                            <CheckedContentBox>
                                <img src="./images/heart_white.png" width="25px" height="25px" style={{ position: "relative", left: "-20%", top: "13px" }}></img>
                                <div style={{ position: "relative", left: "-20%", top: "13px", fontSize: "18px" }}>{arrHeart[arrId]}</div>
                                <PlayOrPause statusCode={1}></PlayOrPause>
                            </CheckedContentBox>
                        </RightBox>
                    </CheckedBox>
                </>
            ) : (
                <>
                    <Box>
                        <LeftBox>
                            <img src={imgsrc} width="95%" height="95%" alt='corporate' />
                        </LeftBox>
                        <RightBox>
                            <TitleBox>
                                {arrQuestion[arrId]}
                            </TitleBox>
                            <ContentBox>
                                <img src="./images/heart.png" width="25px" height="25px" style={{ position: "relative", left: "-20%", top: "13px" }}></img>
                                <div style={{ position: "relative", left: "-20%", top: "13px", fontSize: "18px" }}>{arrHeart[arrId]}</div>
                                <PlayOrPause statusCode={0}></PlayOrPause>
                            </ContentBox>
                        </RightBox>
                    </Box>
                </>
            )}

        </>
    );
}

export default Card;