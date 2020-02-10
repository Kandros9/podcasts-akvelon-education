import React, {useEffect, createRef, useState} from 'react';
import './card.scss'
import red_card from "../../assets/png/red_card.png"
import blue_card from "../../assets/png/blue_card.png"
import pink_card from "../../assets/png/pink_card.png"
import {getCardsImage} from "../../helpers/average_color";
import {fetchBestPodcasts, getImagesColor} from "../../api";
import Card from "./Card";
import {Colors, Podcast} from "../../types/data";
import {RouteComponentProps, withRouter} from "react-router-dom";

const CardList = (props: RouteComponentProps) => {

    const [podcasts, setPodcasts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [cardColors, setCardColors] = useState([] as string[]);

    useEffect(() => {
        fetchBestPodcasts().then(result => {
            setPodcasts(result.podcasts);
            getImagesColor(result.podcasts.map((podcast: Podcast) => podcast.thumbnail)).then((colors: Colors) => {
                setCardColors(getCardsImage(colors.dominant_colors));
                setLoading(false);
            })
        });

    }, []);


    return (isLoading ? <div>Loading...</div> : <>
            {podcasts.map((podcast: Podcast, index) => <Card key={podcast.id} podcast={podcast} cardColor={cardColors[index]} {...props}/>)}
        </>
    );
};


export default withRouter(CardList);