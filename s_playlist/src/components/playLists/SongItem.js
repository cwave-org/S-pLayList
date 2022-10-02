import { useState } from "react";
import "./SongItem.css";
import { connect, useDispatch } from "react-redux";
import { selectSong } from "./actions";

const SongItem = ({ song, index, selectSong, selectedSongId, playerState }) => {
    const [, setHovered] = useState(false);
    const dispatch = useDispatch();

    // Set song as active
    const now_selected = selectedSongId === song.id ? "active" : "";

    return (
        <div
            className={`song-item`}
            id={now_selected}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => {
                selectSong(song);
                dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
            }}
        >
            <div style={{display: "flex", flexDirection: "column"}}>
                <div className="index">{index + 1}</div>
                <img src={song.plusminus} width={10}></img>
            </div>
            <img src={song.image} width={40}></img>
            <div className="name">{song.name}</div>
            <img src="images/playNmenu.png">
            </img>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedSongId: state.selectedSongId,
        playerState: state.playerState,
    };
};

export default connect(mapStateToProps, { selectSong })(SongItem);
