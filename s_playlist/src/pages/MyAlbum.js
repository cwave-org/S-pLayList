
import React, { useEffect, useState } from "react";
import '../style/myalbum.css'; 
import '../style/style.css';
import MusicBar from "../components/MusicBar";

const colors1 = [
    '#1447FF','#808080','#808080','#808080','#808080','#808080','#808080',
];

const colors2 = [
    '#808080','#1447FF','#808080','#808080','#808080','#808080','#808080',
];

const colors3 = [
    '#808080','#808080','#1447FF','#808080','#808080','#808080','#808080',
];

const colors4 = [
    '#808080','#808080','#808080','#1447FF','#808080','#808080','#808080',
];

const colors5 = [
    '#808080','#808080','#808080','#808080','#1447FF','#808080','#808080',
];

const colors6 = [
    '#808080','#808080','#808080','#808080','#808080','#1447FF','#808080',
];

const colors7 = [
    '#808080','#808080','#808080','#808080','#808080','#808080','#1447FF',
];

const MyAlbum=()=>{
    const [value, setValue] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
          setValue((v) => (v === 6 ? 0 : v + 1));
        }, 2000);
      }, []);


    return(
    <>       
        <div className="myimg">
            <img src = "images\iu.png" width="80%"></img>
        </div>
        <div className="mysns">
            <a href="https://twitter.com/_IUofficial"><img src = "images\twitter.png" width="8%" id="snslogo"></img></a>
            <a href="https://www.instagram.com/dlwlrma/"><img src = "images\Instagram.webp" width="8%" id="snslogo"></img></a>
            <a href="https://www.facebook.com/iu.loen"><img src = "images\face.png" width="8%" id="snslogo"></img></a>
        </div>

        <div className="myintroduce">
            <p style={ {  color: colors1[value] }}>이지은</p>
            <p style={ {  color: colors3[value] }}>010-1234-5678</p>
            <p style={ {  color: colors5[value] }}>chungclass1@gmail.com</p>
            <p style={ {  color: colors7[value] }}>신한카드 인프라 운영팀 팀장</p>
            <p style={ {  color: colors2[value] }}>서울시 중구 을지로 100</p>
            <p style={ {  color: colors4[value] }}>숙명여자대학교 소프트웨어학부 졸</p>
            <p style={ {  color: colors6[value] }}>Fax = 002 - 1234 - 5678</p>
        </div>


        <MusicBar pagenum={1} />
        </>
        )
}
export default MyAlbum;