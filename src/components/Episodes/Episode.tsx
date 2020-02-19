import React from 'react';
import './episodes.scss'
import {Episode} from "../../types/data";
import {RouteComponentProps} from "react-router-dom";
import moment from "moment";
import PlayIcon from "../Icons/PlayIcon";
import {useDispatch} from "react-redux";
import {addEpisodeToPlayerAction} from "../../redux/actions";

type Props = RouteComponentProps & {
    episode: Episode
};

const EpisodeItem = (props: Props) => {

    const { episode } = props;
    const dispatch = useDispatch();

    const playEpisode = () => {
        dispatch(addEpisodeToPlayerAction(episode.audio));
    };

    const episodeDuration = () => {
        let d = moment.duration({s: episode.audio_length_sec});
        return moment().startOf('day').add(d).format('HH:mm:ss')
    };


    return <div className="episode-item">
        <div><img src={episode.thumbnail} className="episode-image"/></div>
        <div className="episode-header">
            <h4>{episode.title}</h4>
            <p>{moment(episode.pub_date_ms).format('MMMM DD YYYY')}</p>
            <div className="play-button" onClick={playEpisode}>
                <PlayIcon/>&nbsp;&nbsp;
                {episodeDuration()}
            </div>
        </div>
    </div>;
};


export default EpisodeItem;