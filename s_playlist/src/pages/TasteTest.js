import React from "react";
import MusicBar from './../components/MusicBar';
import Layout from './../components/Layout';

const TasteTest=()=>{

    return(
        <Layout>
        test화면
        <MusicBar pagenum={2} currenttime={"02:38"}/>
        </Layout>
    )
}

export default TasteTest;