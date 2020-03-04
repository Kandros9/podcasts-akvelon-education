import React, {useState, createRef, useEffect, Ref} from 'react';
import './player.scss'

// @ts-ignore
import ReactAudioPlayer from 'react-audio-player';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import EpisodesLoadingSpinner from "../LoadingSpinner/EpisodesLoadingSpinner";
import {setPausedOnAction, setSliderAction} from "../../redux/actions";
import {isEpisodePresent} from "../../helpers/persist_storage";


const Player = () => {

    const player = useSelector((state: RootState) => state.player);
    const episodes = useSelector((state: RootState) => state.episodesListened).episodes_listened;
    const [isLoaded, setLoaded] = useState(false);
    const [playerObject, setPlayerObject] = useState({} as HTMLAudioElement);
    const dispatch = useDispatch();
    let playerElement = createRef<HTMLAudioElement>();

    const getPausedOnTime = () => {
        let currTime = 0;
        let index = isEpisodePresent(player.episode.id, episodes);
        if (index !== -1) {
            currTime = episodes[index].paused_on;
        }
        return currTime;
    };

    useEffect(() => {
        setPlayerObject(playerElement.current!)
    }, [playerElement]);

    const onPause = (event: Event) => {
        // @ts-ignore
        let time = event.target.currentTime;
        dispatch(setSliderAction(time));
        dispatch(setPausedOnAction(time, player.episode.id))
    };

    window.onclose = () => {
        if (playerObject) dispatch(setSliderAction(playerObject.currentTime));
    };

    const onCanPlay = () => setLoaded(true);

    const onLoadedMetadata = (e: any) => {
        let currTime = player.slider !== 0 ? player.slider : getPausedOnTime();
        console.log(currTime)
        e.target.currentTime = currTime;
    };

    const onAbort = () => {
        setLoaded(false);
    };

    const onStop = () => {
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
            onStop={onStop}
            onLoadedMetadata={onLoadedMetadata}
            ref={playerElement}
        />
        <div className="audio-loader">{showLoading()}</div>

    </div>;
};


export default Player;