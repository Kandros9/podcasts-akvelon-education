import React, {createRef} from 'react';
import './card.scss'
import {RouteComponentProps} from "react-router-dom";

type Props = RouteComponentProps & {
    id: string,
    title: string;
    thumbnail: string,
    cardColor: string;
};

const Card = (props: Props) => {
    const { id, title, thumbnail, cardColor } = props;

    let img = createRef<HTMLImageElement>();

    const cropTitle = (title: string) => {
        const len = 35;
        let newTitle = title.substr(0, len);
        if (newTitle.length < len){
            return title;
        } else return newTitle.substr(0, Math.max(newTitle.lastIndexOf(' '), newTitle.lastIndexOf(',') - 1)) + "...";
    };

    const forwardToPodcastView = () => {
        props.history.push(`/podcast/${id}`)
    };

    return (
        <div className="card" onClick={forwardToPodcastView}>
            <img className="card-image" src={cardColor} alt="card" />
            <span className="card-title">{cropTitle(title)}</span>
            <img ref={img} src={thumbnail}
                 className="podcast-cover" alt="cover"/>

        </div>
    );
};


export default Card;