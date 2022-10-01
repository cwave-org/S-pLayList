import React from "react";
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
`

const Question=({pageId})=>{ 
    
    var arrQuestion = new Array(
        "이지은 님의 최애 햄버거 집은?",
        "이지은 님이 더 선호하는 카페는?"
    ); //배열선언

   
    return(
        <>
            <Box>
                <h2 style={{marginBottom : "10px", textAlign: "center"}}>Q{pageId}.</h2>
                <div style={{marginBottom : "20px", textAlign: "center" }}>
                    {arrQuestion[0]}
                </div>
            </Box>
        </>
    );
}

export default Question;