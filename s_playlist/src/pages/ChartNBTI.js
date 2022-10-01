import React from "react";
import MusicBar from './../components/MusicBar';
import PlayList from "../components/playLists/PlayList";
import SoBTI from "../components/SoBTI";
import Layout from './../components/Layout';

const ChartNBTI = () => {
    return(
        <Layout>
            <div style={{
                itemAlign:"center",
            }}>
                <PlayList />
                <br/>
                <SoBTI/>
                <br/>
                <MusicBar pagenum={3} currenttime={"03:57"}/>
            </div>
        </Layout>
    )
}

export default ChartNBTI;