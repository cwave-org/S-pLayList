import React from "react";
import styled, { css } from "styled-components";

const PlayOrPause = ({ statusCode }) => { //0이면 정지, 1이면 재생
    var play = false;
    if (statusCode == 0) {
        play = false;
    }
    else if (statusCode == 1) {
        play = true;
    }
    return (
        <>
            {play ? (
                <>
                    <img src="./images/play_white.png" width="25px" height="25px" style={{position: "relative", left: "20%", top: "10px"}}></img>
                </>
            ) : (
                <>
                    <img src="./images/stop.png" width="25px" height="25px" style={{position: "relative", left: "20%", top: "10px"}}></img>
                </>
            )}
        </>
    );
}

export default PlayOrPause;