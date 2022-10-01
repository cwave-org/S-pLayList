import React from "react";
import MusicBar from './../components/MusicBar';
import Button from "../component/Button";

const ChartNBTI=()=>{

    return(
        
        <div>
            <Button size="sm" children="이 달의 소비" variant="default_empty"/>
            <Button size="sm" children="이 달의 소비" variant="default_fill"/>
        <p>
        nbti 화면입니다
        <MusicBar pagenum={3} />
        </p>
        </div>
    )
}

export default ChartNBTI;