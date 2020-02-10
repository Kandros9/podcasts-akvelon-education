import React, {useEffect, createRef, useState} from 'react';
import './card.scss'
import red_card from "../../assets/png/red_card.png"
import blue_card from "../../assets/png/blue_card.png"
import pink_card from "../../assets/png/pink_card.png"

import {Podcast} from "../../types/data";
import {RouteComponentProps} from "react-router-dom";

type Props = RouteComponentProps & {
    podcast: Podcast;
    cardColor: string;
};

const Card = (props: Props) => {
    const { podcast, cardColor } = props;

    let img = createRef<HTMLImageElement>();

    const cropTitle = (title: string) => {
        const len = 35;
        let newTitle = title.substr(0, len);
        if (newTitle.length < len){
            return title;
        } else return newTitle.substr(0, Math.max(newTitle.lastIndexOf(' '), newTitle.lastIndexOf(',') - 1)) + "...";
    };

    const forwardToPodcastView = () => {
        props.history.push(`/podcast/${podcast.title}`)
    };

    return (
        <div className="card" onClick={forwardToPodcastView}>
            <img className="card-image" src={cardColor} alt="card" />
            <span className="card-title">{cropTitle(podcast.title)}</span>
            <img ref={img} src={podcast.thumbnail}
                 className="podcast-cover" alt="cover"/>

        </div>
    );
};


export default Card;