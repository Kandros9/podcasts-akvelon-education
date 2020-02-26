import React, {useEffect, useState} from 'react';
import './card.scss'
import {getCardsImage} from "../../helpers/average_color";
import {fetchBestPodcasts, getImagesColor} from "../../api";
import Card from "./Card";
import {Colors, Podcast} from "../../types/data";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addBestPodcastsAction, addBestPodcastsCardsAction} from "../../redux/actions";
import {RootState} from "../../redux/reducers";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const CardList = (props: RouteComponentProps) => {

    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const podcasts = useSelector((state: RootState) => state.podcasts);

    useEffect(() => {
        if (podcasts.best_podcasts.length == 0 && podcasts.best_podcasts_cards.length == 0)
            fetchBestPodcasts().then(result => {
                getImagesColor(result.podcasts.map((podcast: Podcast) => podcast.thumbnail)).then((colors: Colors) => {
                    dispatch(addBestPodcastsAction(result.podcasts));
                    dispatch(addBestPodcastsCardsAction(getCardsImage(colors.dominant_colors)));
                    setLoading(false);
                })
            });
        else setLoading(false);
    }, []);


    return (isLoading ? <LoadingSpinner/> : <>
            {podcasts.best_podcasts.map((podcast: Podcast, index: number) =>
                <Card key={podcast.id} id={podcast.id} title={podcast.title} thumbnail={podcast.thumbnail} cardColor={podcasts.best_podcasts_cards[index]} {...props}/>)}
        </>
    );
};


export default withRouter(CardList);