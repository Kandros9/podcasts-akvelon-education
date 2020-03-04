import React, {useEffect, useState} from 'react';
import {fetchBestPodcastsByGenre, fetchSearchPodcasts, getImagesColor} from "../../api";
import {Colors, Genre, Podcast, PodcastSearchItem} from "../../types/data";
import {RouteComponentProps} from "react-router-dom";
import {getCardsImage} from "../../helpers/average_color";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Card from "../Cards/Card";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import {addBestPodcastsAction, addBestPodcastsCardsAction, addSearchResultAction} from "../../redux/actions";
import EpisodesLoadingSpinner from "../LoadingSpinner/EpisodesLoadingSpinner";
import CardContainer from "../Cards/CardContainer";


type Props = RouteComponentProps & {
    genreId: string
}

const GenreArea = (props: Props) => {

    const [isLoading, setLoading] = useState(true);
    const [podcasts, setPodcasts] = useState([] as Array<Podcast>);
    const [colors, setColors] = useState([] as Array<string>);

    useEffect(() => {
        fetchBestPodcastsByGenre(props.genreId).then(result => {
            getImagesColor(result.podcasts.map((podcast: Podcast) => podcast.thumbnail)).then((colors: Colors) => {
                setPodcasts(result.podcasts);
                setColors(getCardsImage(colors.dominant_colors));
                setLoading(false);
            })
        });
    }, );


    return <div>
        <CardContainer isLoading={isLoading} podcasts={podcasts} podcastsSearch={[]} colors={colors} {...props}/>
    </div>;
};


export default GenreArea;