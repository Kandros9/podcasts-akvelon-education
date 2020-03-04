import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {EpisodeListened} from "../../types/data";
import EpisodeHistoryItem from "./EpisodeHistoryItem";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import './episodes_history.scss'


const EpisodeHistoryList = (props: RouteComponentProps) => {

    const episodes = useSelector((state: RootState) => state.episodesListened).episodes_listened;

    const episodeList = episodes.map((episode: EpisodeListened) =>
        <EpisodeHistoryItem episode={episode} key={episode.id} {...props}/>
    );


    return <div className="episodes">
        {episodeList}
    </div>;
};


export default EpisodeHistoryList;