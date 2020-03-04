import React from 'react';
import './episodes.scss'
import {RouteComponentProps} from "react-router-dom";
import {Episode, PodcastDetail} from "../../types/data";
import EpisodeItem from "./Episode";

type Props = RouteComponentProps & {
    episodes: Array<Episode>,
    podcast: PodcastDetail,
};

const EpisodeList = (props: Props) => {

    const { episodes } = props;

    const episodeList = episodes.map((episode: Episode) =>
        <EpisodeItem episode={episode} key={episode.id} {...props}/>
    );


    return <div className="podcast-episodes">
        <h2>Episodes</h2><br/>
        {episodeList}
    </div>;
};


export default EpisodeList;