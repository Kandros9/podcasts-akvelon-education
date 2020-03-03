import React, {useState, createRef, useEffect, Ref} from 'react';
import './player.scss'

// @ts-ignore
import ReactAudioPlayer from 'react-audio-player';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import EpisodesLoadingSpinner from "../LoadingSpinner/EpisodesLoadingSpinner";
import {setSliderAction} from "../../redux/actions";


const Player = () => {

    const player = useSelector((state: RootState) => state.player);
    const [isLoaded, setLoaded] = useState(false);
    const [playerObject, setPlayerObject] = useState({} as HTMLAudioElement);
    const dispatch = useDispatch();
    let playerElement = createRef<HTMLAudioElement>();

    useEffect(() => {
        setPlayerObject(playerElement.current!)
    }, [playerElement]);

    const onPause = (event: Event) => {
        // @ts-ignore
        dispatch(setSliderAction(event.target.currentTime));
    };

    window.onclose = () => {
        if (playerObject) dispatch(setSliderAction(playerObject.currentTime));
    };

    const onCanPlay = () => setLoaded(true);

    const onLoadedMetadata = (e: any) => e.target.currentTime = player.slider;

    const onAbort = () => {
        setLoaded(false);
    };

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
            onLoadedMetadata={onLoadedMetadata}
            ref={playerElement}
        />
        <div className="audio-loader">{showLoading()}</div>

    </div>;
};


export default Player;