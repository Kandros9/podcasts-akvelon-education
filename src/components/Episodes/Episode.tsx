import React from 'react';
import './episodes.scss'
import {Episode, PodcastDetail} from "../../types/data";
import {RouteComponentProps} from "react-router-dom";
import moment from "moment";
import PlayIcon from "../Icons/PlayIcon";
import {useDispatch, useSelector} from "react-redux";
import {
    addEpisodeToPlayerAction,
    addListenedEpisodeAction,
    setActivePlayButtonAction,
    setLastPlaytimeAction
} from "../../redux/actions";
import {RootState} from "../../redux/reducers";
import {episodeDuration} from "../../helpers/tools";

type Props = RouteComponentProps & {
    episode: Episode,
    podcast: PodcastDetail,
};

const EpisodeItem = (props: Props) => {

    const { episode, podcast } = props;
    const dispatch = useDispatch();
    const player = useSelector((state: RootState) => state.player);

    const playEpisode = () => {
        dispatch(addEpisodeToPlayerAction(episode));
        dispatch(setActivePlayButtonAction(episode.title));
        dispatch(setLastPlaytimeAction(podcast.id));
        dispatch(addListenedEpisodeAction({id: episode.id,
            title: episode.title,
            description: episode.description,
            pub_date_ms: episode.pub_date_ms,
            audio: episode.audio,
            audio_length_sec: episode.audio_length_sec,
            thumbnail: episode.thumbnail,
            podcastId: podcast.id,
            podcastTitle: podcast.title,
            paused_on: 0}))
    };


    return <div className="episode-item">
        <div><img src={episode.thumbnail} className="episode-image"/></div>
        <div className="episode-header">
            <h4>{episode.title}</h4>
            <p>{moment(episode.pub_date_ms).format('MMMM DD YYYY')}</p>
            <div className={player.playButton === episode.title ? 'play-button active' : 'play-button'} onClick={playEpisode}>
                <PlayIcon/>&nbsp;&nbsp;
                {episodeDuration(episode.audio_length_sec)}
            </div>
        </div>
    </div>;
};


export default EpisodeItem;