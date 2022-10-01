import React from "react";
import MusicBar from './../components/MusicBar';
import PlayList from "../components/playLists/PlayList";
import SoBTI from "../components/SoBTI";

const ChartNBTI = () => {
    return(
        
        <div style={{
            padding:"5%",
            itemAlign:"center",
        }}>
            <PlayList />
            <br/>
            <SoBTI/>
            <br/>
            <MusicBar pagenum={3} />
        </div>
    )
}

export default ChartNBTI;