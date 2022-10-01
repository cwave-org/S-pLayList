import React, { useEffect, useState } from "react";
import '../style/myalbum.css'; 
import '../style/style.css';

const MyAlbum=()=>{

    let [ alert, alertSet ] = useState(true);
  useEffect(()=>{
    let timer = setTimeout(()=>{ alertSet(false) }, 2000);
  });

    return(
    <>
        <div className="title">
            <b><h1>IU Pallet</h1></b>
        </div>
        
        <div className="myimg">
            <img src = "images\iu.png" width="80%"></img>
        </div>
        <div className="mysns">
            <a href="https://twitter.com/_IUofficial"><img src = "images\twitter.png" width="8%" id="snslogo"></img></a>
            <a href="https://www.instagram.com/dlwlrma/"><img src = "images\Instagram.webp" width="8%" id="snslogo"></img></a>
            <a href="https://www.facebook.com/iu.loen"><img src = "images\face.png" width="8%" id="snslogo"></img></a>
        </div>

        <div className="myintroduce">
            <p>이지은</p>
            <p>010-1234-5678</p>
            <p>chungclass1@gmail.com</p>
            <p>신한카드 인프라 운영팀 팀장</p>
            <p>서울시 중구 을지로 100</p>
            <p>숙명여자대학교 소프트웨어학부 졸</p>
            <p>Fax = 002 - 1234 - 5678</p>
        </div>
    </>

    )
}

export default MyAlbum;