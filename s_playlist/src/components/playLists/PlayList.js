import Button from "../Button";
import App from "./App";
import songs from "./data/songs.json";
import reducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const PlayList=()=>{
    for (let index = 0; index < songs.length; index++) {
        const song = songs[index];
        song.id = index;
    }

    return(
        <>
            <div style={{display:"flex", justifyContent:"space-around", marginBottom:"10px"}}>
                <Button size="sm" children="이 달의 소비" variant="default_fill"/>
                <span style={{fontSize:"5px", color:"#aaa", marginRight:"55px", marginTop:"7px",}}>2022-09 업데이트</span>
                <Button size="sm" children={<div><img src="images/all.png"></img> 전체보기</div>} variant="default_empty"/>
            </div>
            <Provider
                store={createStore(
                reducers,
                window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
            )}
            >
                <App />
            </Provider>
        </>
    )
}

export default PlayList;
