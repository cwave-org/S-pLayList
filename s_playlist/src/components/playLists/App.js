import React from "react";
import SongList from "./SongList";
import songs from "./data/songs.json";


for (let index = 0; index < songs.length; index++) {
    const song = songs[index];
    song.id = index;
}

const App = () => {
    return (
        <React.Fragment>
            <div style={{
                itemAlign:"center",
            }}>
                <SongList songs={songs} />
            </div>
        </React.Fragment>
    );
};
export default App;
