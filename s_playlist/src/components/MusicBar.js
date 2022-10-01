import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

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
    height: 45px;
`;

const MusicBar=({pagenum, currenttime})=>{
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
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
                <PlayImg onClick={onClickPrev} style={{marginRight:'5px', height:"35px"}} src='./images/backplay.png' alt='play'/>
                <PlayImg onClick={openModal} src='./images/play.png' alt='play'/>
                <Modal open={modalOpen} close={closeModal} header="Shinhan pLayList 이용 팁">
                    되감기, 빨리감기 버튼을 누르면 페이지를 이동할 수 있어요.<br/>
                    3페이지의 '나의 소BTI'를 누르면 상세보기가 가능해요.
                </Modal>
                <PlayImg onClick={onClickNext} style={{marginLeft:'5px', height:"35px"}} src='./images/afterplay.png' alt='play'/>
            </Box>
        </Container>
    );
}

export default MusicBar;