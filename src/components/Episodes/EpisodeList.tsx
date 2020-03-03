import React from 'react';
import './episodes.scss'
import {RouteComponentProps} from "react-router-dom";
import {Episode} from "../../types/data";
import EpisodeItem from "./Episode";

type Props = RouteComponentProps & {
    episodes: Array<Episode>,
    podcastId: string,
};

const EpisodeList = (props: Props) => {

    const { episodes } = props;

    const episodeList = episodes.map((episode: Episode) =>
        <EpisodeItem episode={episode} key={episode.id} {...props}/>
    );


    return <div className="podcast-episodes">
        <h2>Episodes</h2>
        <div className="episodes">
            {episodeList}
        </div>
    </div>;
};


export default EpisodeList;