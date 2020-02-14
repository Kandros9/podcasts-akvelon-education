import React from 'react';
import './episodes.scss'
import {Episode} from "../../types/data";
import {RouteComponentProps} from "react-router-dom";
import moment from "moment";
// @ts-ignore
import ReactAudioPlayer from 'react-audio-player';

type Props = RouteComponentProps & {
    episode: Episode
};

const EpisodeItem = (props: Props) => {

    const { episode } = props;


    return <div className="episode-item">
        <div><img src={episode.thumbnail} className="episode-image"/></div>
        <div className="episode-header">
            <h4>{episode.title}</h4>
            <p>{moment(episode.pub_date_ms).format('MMMM DD YYYY')}</p>
        </div>
        {/*<ReactAudioPlayer
            src={episode.audio}
            controls
        />*/}
    </div>;
};


export default EpisodeItem;