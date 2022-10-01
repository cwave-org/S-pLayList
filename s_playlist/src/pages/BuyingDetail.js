import React from "react";
import Layout from './../components/Layout';
import MusicBar from './../components/MusicBar';
import styled from "styled-components";
import Button from './../components/Button';
import { useLocation } from "react-router-dom";


const Img=styled.img`
    width:50%;
    margin: 0 auto;
    text-align: center;
`;
const Container=styled.div`
    width: 85%;
    border-radius: 10px;
    padding: 5% 0;
    background-color: white;
    text-align: center;
    margin: 10px auto;
`;
const Text=styled.div`
    font-size: 9px;
    margin: 5% 0 10%;
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
const Box=styled.div`
    width: 85%;
    border-radius: 10px;
    padding: 5px 0 0;
    background-color: white;
    margin: 10px auto;
`;
const DetailBox1=styled.div`
    position: static;
    border-radius: 10px;
    margin: 7px 0 15px;
    height: 150px;
    background-color: white;
`
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
const BuyingDetail=()=>{
    const loca=useLocation();
    const imgurl=loca.state.img;
    const onAlertClick=()=>{
        alert("서비스 준비중입니다.");
    }
    return(
        <Layout>
            <Container>
                <Img src={imgurl}/>
                <Text>햇살이 따듯했던 어느날 ..</Text>
            </Container>
            <Box>
                <div style={{margin:"0 3%"}}>
                    <Button size="sm" children="방명록" variant="default_fill"/>
                </div>
                <DetailBox1>
                    <Line>
                        <Profile src="./images/profile.png"/>
                        <Comment>예전에 저도 여기 가봤는데 좋더라구요~</Comment>
                        <Date>2022.10.02</Date>
                        <Hr/>
                    </Line>
                    
                    <Line>
                        <Profile src="./images/profile1.png"/>
                        <Comment>저랑도 가주세요 ㅎㅎ<br/>프로필 사진 너무 예쁘게 꾸미셨네요:)</Comment>
                        <Date>2022.09.22</Date>
                        <Hr/>
                    </Line>
                    <div onClick={onAlertClick} style={{margin:'5% 3% 0'}}>
                        <Button size="sm" children="나도 한 마디 남기기" variant="default_empty"/>
                    </div>
                </DetailBox1>
            </Box>

            <MusicBar pagenum={4} currenttime={"05:16"}/>
            
        </Layout>
    );
}
export default BuyingDetail;