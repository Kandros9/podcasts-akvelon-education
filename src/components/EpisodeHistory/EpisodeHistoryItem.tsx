import React from 'react';
import './episodes_history.scss'
import {EpisodeListened} from "../../types/data";
import {RouteComponentProps} from "react-router-dom";
import {episodeDuration} from "../../helpers/tools";

type Props = RouteComponentProps & {
    episode: EpisodeListened,
};

const EpisodeHistoryItem = (props: Props) => {

    const { episode } = props;

    return <div className="episode-item">
        <div><img src={episode.thumbnail} className="episode-image"/></div>
        <div className="episode-header">
            <a href={`/podcast/${episode.podcastId}`}>{episode.podcastTitle}</a>
            <h4>{episode.title}</h4>
            <p>Paused on {episodeDuration(episode.paused_on)}</p>
        </div>
    </div>;
};


export default EpisodeHistoryItem;