import React, {useEffect, useState} from 'react';
import {fetchBestPodcastsByGenre, getImagesColor} from "../../api";
import {Colors, Podcast} from "../../types/data";
import {RouteComponentProps} from "react-router-dom";
import {getCardsImage} from "../../helpers/average_color";
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