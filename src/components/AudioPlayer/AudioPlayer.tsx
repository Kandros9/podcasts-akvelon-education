import React from 'react';
import './player.scss'

// @ts-ignore
import ReactAudioPlayer from 'react-audio-player';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";


const Player = () => {

    const player = useSelector((state: RootState) => state.player);
    const onPause = (event: Event) => {
        // @ts-ignore
        console.log(event.target.currentTime)
    };


    return <div className="player-container">
        <ReactAudioPlayer
            className="audio-player"
            src={player.audio}
            controls
            autoPlay
            onPause={onPause}
        />

    </div>;
};


export default Player;