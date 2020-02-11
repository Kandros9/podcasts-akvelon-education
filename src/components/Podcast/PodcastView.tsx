import React, {useEffect, useState} from 'react';
import './podcast.scss'
import {RouteComponentProps, withRouter} from "react-router-dom";
import {fetchPodcast} from "../../api";
import {Podcast, PodcastDetail} from "../../types/data";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Card from "../Cards/Card";

interface MatchParams {
    id: string;
}
type Props = RouteComponentProps<MatchParams>;

const PodcastView = (props: Props) => {

    const [isLoading, setLoading] = useState(true);
    const [podcast, setPodcast] = useState<PodcastDetail>({} as PodcastDetail);

    //const podcastId = props.match.params.id;
    const podcastId = window.location.pathname.split("/")[2];

    useEffect(() => {
        fetchPodcast(podcastId).then((result: PodcastDetail) => {
            setPodcast(result);
            setLoading(false);
        });
    }, []);

    return (isLoading ? <LoadingSpinner/> :
            <div className="podcast-container">
                <img src={podcast.thumbnail} alt="Cover" className="podcast-image"/>
                <div>
                    <h1>{podcast.title}</h1>
                    <h2>By {podcast.publisher}</h2>
                    <button className="website-btn" onClick={e => window.location.href=podcast.website}>Website</button>
                </div>
            </div>
    );
};

export default withRouter(PodcastView);
