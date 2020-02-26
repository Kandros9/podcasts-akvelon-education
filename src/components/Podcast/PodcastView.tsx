import React, {useEffect, useState} from 'react';
import './podcast.scss'
import {RouteComponentProps, withRouter} from "react-router-dom";
import {fetchGenres, fetchPodcast} from "../../api";
import {Episode, Genre, Genres, PodcastDetail} from "../../types/data";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import language from "../../assets/svg/language.svg"
import country from "../../assets/svg/country.svg"
import total_episodes from "../../assets/svg/total_episodes.svg"
import since from "../../assets/svg/since.svg"
import moment from "moment";
import EpisodeList from "../Episodes/EpisodeList";
import EpisodesLoadingSpinner from "../LoadingSpinner/EpisodesLoadingSpinner";

interface MatchParams {
    id: string;
}

type Props = RouteComponentProps<MatchParams>;

const PodcastView = (props: Props) => {

    const [isLoading, setLoading] = useState(true);
    const [podcast, setPodcast] = useState<PodcastDetail>({} as PodcastDetail);
    const [genres, setGenres] = useState([] as JSX.Element[]);
    const [episodes, setEpisodes] = useState([] as Episode[]);
    const [isEpisodesLoading, setEpisodesLoading] = useState(false);

    const podcastId = window.location.pathname.split("/")[2];

    useEffect(() => {
        fetchPodcast(podcastId).then((podcast: PodcastDetail) => {
            setPodcast(podcast);
            fetchGenres().then((genresObject: Genres) => {
                setGenres(genresObject.genres.filter((genre: Genre) => {
                    return podcast.genre_ids.includes(genre.id)
                }).map((genre: Genre) => <div key={genre.id} className="genre">{genre.name}</div>))
            });
            setEpisodes(podcast.episodes);
            setLoading(false);
        });
    }, []);

    const loadNextEpisodes = () => {
        setEpisodesLoading(true);
        fetchPodcast(podcastId, podcast.next_episode_pub_date).then((podcast: PodcastDetail) => {
            let newEpisodes = episodes.concat(podcast.episodes);
            setPodcast(podcast);
            setEpisodes(newEpisodes);
            setEpisodesLoading(false)
        });
    };

    return (isLoading ? <LoadingSpinner/> :
            <div className="podcast-container">
                <div className="podcast-header">
                    <img src={podcast.thumbnail} alt="Cover" className="podcast-image"/>
                    <div>
                        <h1>{podcast.title}</h1>
                        <h3>By {podcast.publisher}</h3>
                        <button className="subscribe-btn" onClick={e => window.open(podcast.website)}>Subscribe</button>
                        <button className="website-btn" onClick={e => window.open(podcast.website)}>Website</button>
                    </div>
                </div>
                <br/>
                <div className="podcast-description">
                    <h2>Description</h2>
                    <p className="description">{podcast.description}</p>
                    <div className="genres">
                        {genres}
                    </div>
                    <div>
                        <div className="info">
                            <div className="info-item">
                                <img src={language} className="info-icon" alt="Icon"/>
                                <span>{podcast.language}</span>
                            </div>
                            <div className="info-item">
                                <img src={country} className="info-icon" alt="Icon"/>
                                <span>{podcast.country}</span>
                            </div>
                            <div className="info-item">
                                <img src={total_episodes} className="info-icon" alt="Icon"/>
                                <span>{podcast.total_episodes} episodes</span>
                            </div>
                            <div className="info-item">
                                <img src={since} className="info-icon" alt="Icon"/>
                                <span>since {moment(podcast.earliest_pub_date_ms).format('MMMM DD YYYY')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <EpisodeList episodes={episodes} {...props}/>
                <div className="load-block">
                    {podcast.next_episode_pub_date && (isEpisodesLoading ? <EpisodesLoadingSpinner/> : <div className="load-button" onClick={loadNextEpisodes}>Load more</div>)}
                </div>
            </div>
    );
};

export default withRouter(PodcastView);
