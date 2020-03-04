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
import tick from "../../assets/svg/tick.svg"
import moment from "moment";
import EpisodeList from "../Episodes/EpisodeList";
import EpisodesLoadingSpinner from "../LoadingSpinner/EpisodesLoadingSpinner";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import {addMyPodcastsAction} from "../../redux/actions";
import {isSubscribed} from "../../helpers/persist_storage";

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
    const dispatch = useDispatch();
    const [subscribed, setSubscribed] = useState(false);
    const myPodcasts = useSelector((state: RootState) => state.myPodcasts);

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
            setSubscribed(isSubscribed(podcast.id, myPodcasts.my_podcasts));
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

    const subscribePodcast = () => {
        dispatch(addMyPodcastsAction(
            {id: podcast.id, title: podcast.title, thumbnail: podcast.thumbnail, publisher: podcast.publisher, last_played: 0}
        ));
        setSubscribed(true);
    };

    return (isLoading ? <LoadingSpinner/> :
            <div className="podcast-container">
                <div className="podcast-header">
                    <img src={podcast.thumbnail} alt="Cover" className="podcast-image"/>
                    <div className="podcast-header-info">
                        <h1>{podcast.title}</h1>
                        <h3>By {podcast.publisher}</h3>
                        {!subscribed ? <button className="subscribe-btn" onClick={subscribePodcast}>Subscribe</button> :
                            <button className="subscribe-btn-added">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0
			                                c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7
			                                C514.5,101.703,514.499,85.494,504.502,75.496z"/>
                                </svg>
                                Subscribed
                            </button>
                        }
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
                <EpisodeList episodes={episodes} podcast={podcast} {...props}/>
                <div className="load-block">
                    {podcast.next_episode_pub_date && (isEpisodesLoading ? <EpisodesLoadingSpinner/> :
                        <div className="load-button" onClick={loadNextEpisodes}>Load more</div>)}
                </div>
            </div>
    );
};

export default withRouter(PodcastView);
