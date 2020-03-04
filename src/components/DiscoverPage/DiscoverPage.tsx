import React, {useEffect, useState} from 'react';
import './discover.scss'
import '../Cards/card.scss'
import {getCardsImage} from "../../helpers/average_color";
import {fetchBestPodcasts, getImagesColor} from "../../api";
import {Colors, Podcast} from "../../types/data";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addBestPodcastsAction, addBestPodcastsCardsAction} from "../../redux/actions";
import {RootState} from "../../redux/reducers";
import CardContainer from "../Cards/CardContainer";

const Discover = (props: RouteComponentProps) => {

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


    return <CardContainer isLoading={isLoading} podcasts={podcasts.best_podcasts} podcastsSearch={[]} colors={podcasts.best_podcasts_cards} {...props}/>;
};


export default withRouter(Discover);