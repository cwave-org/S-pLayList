import React from "react";
import MusicBar from './../components/MusicBar';
import Button from './../components/Button';
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'
import Layout from './../components/Layout';
const Title=styled.h1`
    text-align: center;
`;
const Box = styled.div`
    width: 100%;
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
    opacity: 85%;
    height: 100px;
    margin: 0 auto;
    border-radius: 10px;
`;
const DetailBox1=styled.div`
    position: static;
    border-radius: 10px;
    margin: 7px 0 15px;
    height: 150px;
    background-color: white;
`
const PlayImg=styled.img`
    position: relative;
    top: -45px;
    left: 35px;
    width: 15%;
`;
const Line = styled.div`
    /* padding:1px 5px; */
    margin:1px 5px;
    position:relative;
    width:100%;
    height: 50px;
`;
const Profile=styled.img`
    position: absolute;
    top:20%;
    left: 5%;
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
    border-radius: 10px 10px 0 0 ;
    height: 190px;
`;
const Comment=styled.div`
    font-size: 9px;
    position: absolute;
    color:#676767;
    top:27%;
    left: 17%;
`;
const Date=styled(Comment)`
    font-size: 9px;
    top:70%;
    left:80%;
    color:#67676799;
`;
const Hr=styled.div`
    position:relative;
    top:100%;
    width: 90%;
    margin: 0 auto;
    border-bottom:1px solid #D0D0D0;
    height: 5%;
`;
const Communication=()=>{
    const navi=useNavigate();
    const onDetailClick=(event)=>{
        if(event==1){
            navi("/detail",{state:{img:"./images/cafe.jpg"}});
        } else if(event==2){
            navi("/detail",{state:{img:"./images/bread.jpg"}});
        }
        else{
            navi("/detail",{state:{img:"./images/burger.jpg"}});
        }
        // console.log(event);
    }
    const onAlertClick=()=>{
        alert("서비스 준비중입니다.");
    }
    return(
        <Layout>
            <Box>
                <Button size="sm" children="이지은님의 소비앨범" variant="default_fill"/>
                <DetailBox align={true}>
                    <Each>
                        <BuyingImg src="./images/cafe.jpg" />
                        <About>최애카페</About>
                        <PlayImg onClick={()=>onDetailClick(1)} src="./images/godetail.png" />
                    </Each>
                    <Each>
                        <BuyingImg src="./images/bread.jpg" />
                        <About>좋아하는 디저트</About>
                        <PlayImg onClick={()=>onDetailClick(2)} src="./images/godetail.png" />
                    </Each>
                    <Each>
                        <BuyingImg src="./images/burger.jpg" />
                        <About>수제버거</About>
                        <PlayImg onClick={()=>onDetailClick(3)} src="./images/godetail.png" />
                    </Each>
                </DetailBox>
            </Box>
            <Box>
                <Button size="sm" children="신한과 함께해요" variant="default_fill"/>
                <DetailBox>
                    <Garden src="./images/garden.png" alt="garden"/>
                    <div style={{textAlign:'center',  paddingBottom:'10px'}}>
                        <img style={{width:'15px'}} src="./images/dday.png" alt="dday"/> D+321                    
                    </div>
                </DetailBox>
            </Box>
            <Box>
                <Button size="sm" children="NEW 한 마디" variant="default_fill"/>
                <DetailBox1>
                    <Line>
                        <Profile src="./images/profile.png"/>
                        <Comment>음식에 쓰는 돈이 가장 많군욤 ㅎㅎㅎㅎ저도 마찬가지랍니다</Comment>
                        <Date>2022.10.02</Date>
                        <Hr/>
                    </Line>
                    
                    <Line>
                        <Profile src="./images/profile1.png"/>
                        <Comment>잘 구경하고 갑니다~ <br/>프로필 사진 너무 예쁘게 꾸미셨네요:)</Comment>
                        <Date>2022.09.22</Date>
                        <Hr/>
                    </Line>
                    <div onClick={onAlertClick} style={{margin:'3% 1% 0 55%'}}>
                        <Button size="sm" children="나도 한 마디 남기기" variant="default_empty"/>
                    </div>
                    {/* <Line>
                        <div style={{position:'relative',left:'55%',top:'25%'}}>
                        <div onClick={onAlertClick}>
                            <Button size="sm" children="나도 한 마디 남기기" variant="default_empty"/>
                        </div>
                        </div>
                    </Line> */}
                </DetailBox1>
            </Box>        
            <MusicBar pagenum={4} currenttime={"05:16"}/>
        </Layout>
    )
}

export default Communication;