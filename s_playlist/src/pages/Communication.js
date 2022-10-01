import React from "react";
import MusicBar from './../components/MusicBar';
import Button from './../components/Button';
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'
const Box = styled.div`
    margin: 3px auto 15px;
`;
const DetailBox = styled.div`
    background-color: white;
    justify-content: space-between;
    border-radius: 10px;
    display: ${props=>props.align ? "flex" : "block"};
    margin: 7px 0 15px;
`;
const BuyingImg=styled.img`
    width: 90%;
    opacity: 50%;
    height: 100px;
    margin: 0 auto;
    border-radius: 10px;
`;
const PlayImg=styled.img`
    position: relative;
    top: -45px;
    left: 35px;
    width: 15%;
`;
const Each = styled.div`
    width: 30%;
    text-align: center;
    height: 130px;
    margin: 10px auto;
`;
const About= styled.div`
    text-align: left;
    margin:0 0 0 5%;
    font-size: 10px;
`;
const Garden=styled.img`
    width: 100%;
    margin: 0 auto;
    height: 190px;
`;
const Communication=()=>{
    const navi=useNavigate();
    const onDetailClick=()=>{
        navi("/communication/detail");
    }
    return(
        <>
            <Box>
                <Button size="sm" children="이지은님의 소비앨범" variant="default_fill"/>
                <DetailBox align={true}>
                    <Each>
                        <BuyingImg src="./images/cafe.jpg" />
                        <About>최애카페</About>
                        <PlayImg onClick={onDetailClick} src="./images/godetail.png" />
                    </Each>
                    <Each>
                        <BuyingImg src="./images/bread.jpg" />
                        <About>좋아하는 디저트</About>
                        <PlayImg onClick={onDetailClick} src="./images/godetail.png" />
                    </Each>
                    <Each>
                        <BuyingImg src="./images/burger.jpg" />
                        <About>수제버거</About>
                        <PlayImg onClick={onDetailClick} src="./images/godetail.png" />
                    </Each>
                </DetailBox>
            </Box>
            <Box>
                <Button size="sm" children="신한과 함께해요" variant="default_fill"/>
                <DetailBox>
                    <Garden src="./images/garden.png" alt="garden"/>
                    <div style={{textAlign:'center'}}>
                        <img style={{width:'15px'}} src="./images/dday.png"/> D+321                    
                    </div>

                </DetailBox>
            </Box>
            <Box>
                <Button size="sm" children="NEW 한 마디" variant="default_fill"/>
                <DetailBox>
                    
                </DetailBox>
            </Box>        
            <MusicBar pagenum={4} currenttime={"05:16"}/>
        </>
    )
}

export default Communication;