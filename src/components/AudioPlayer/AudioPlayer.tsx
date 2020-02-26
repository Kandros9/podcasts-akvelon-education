import React, {useState} from 'react';
import './player.scss'

// @ts-ignore
import ReactAudioPlayer from 'react-audio-player';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import EpisodesLoadingSpinner from "../LoadingSpinner/EpisodesLoadingSpinner";


const Player = () => {

    const player = useSelector((state: RootState) => state.player);
    const [isLoaded, setLoaded] = useState(false);

    const onPause = (event: Event) => {
        // @ts-ignore
        console.log(event.target.currentTime)
    };

    const onCanPlay = () => setLoaded(true);

    const onAbort = () => setLoaded(false);

    const showLoading = () => {
        if (player.episode.audio && !isLoaded) {
            return <EpisodesLoadingSpinner/>
        }
    };


    return <div className="player-container">
        <div className="audio-header">
            {player.episode.audio && <img src={player.episode.thumbnail} className="audio-header-img"/>}
            <div className="audio-header-title">{player.episode.title}</div>
        </div>
        <ReactAudioPlayer
            className="audio-player"
            src={player.episode.audio}
            controls
            autoPlay
            onPause={onPause}
            onCanPlay={onCanPlay}
            onAbort={onAbort}
        />
        <div className="audio-loader">{showLoading()}</div>

    </div>;
};


export default Player;