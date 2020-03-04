import React from 'react';
import {Podcast, PodcastSearchItem} from "../../types/data";
import {RouteComponentProps} from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Card from "../Cards/Card";


type Props = RouteComponentProps & {
    isLoading: boolean
    podcasts: Array<Podcast>
    podcastsSearch: Array<PodcastSearchItem>
    colors: Array<string>
}

const CardContainer = (props: Props) => {

    const {isLoading, podcasts, podcastsSearch, colors} = props;

    const podcastsCards = podcasts.length !== 0 ? podcasts.map((podcast: Podcast, index: number) =>
        <Card key={podcast.id} id={podcast.id} title={podcast.title} thumbnail={podcast.thumbnail}
              cardColor={colors[index]} {...props}/>) : podcastsSearch.map((podcast: PodcastSearchItem, index: number) => {
        return <Card key={podcast.id} id={podcast.id} title={podcast.title_original}
                     thumbnail={podcast.thumbnail}
                     cardColor={colors[index]} {...props}/>
    });

    return <div className="card-container">
        {isLoading ? <LoadingSpinner/> :
            <>
                {podcastsCards}
            </>}
    </div>;
};


export default CardContainer;